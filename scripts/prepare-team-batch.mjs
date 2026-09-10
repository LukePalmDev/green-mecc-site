import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff']);

const parseArguments = (values) => {
  const result = {};
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith('--')) continue;
    const [rawKey, inlineValue] = value.slice(2).split('=', 2);
    result[rawKey] = inlineValue ?? values[index + 1];
    if (inlineValue === undefined) index += 1;
  }
  return result;
};

const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\.[^.]+$/, '')
    .replace(/[.'’]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toUpperCase();

const collectImages = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectImages(path);
    return supportedExtensions.has(extname(entry.name).toLowerCase()) ? [path] : [];
  });

const options = parseArguments(process.argv.slice(2));
const inputRoot = resolve(options.input ?? 'assets-source/INBOX/team-members');

if (!existsSync(inputRoot)) {
  console.error(`Errore: cartella sorgente non trovata: ${inputRoot}`);
  process.exit(1);
}

const sourceFiles = collectImages(inputRoot);
const teamSource = readFileSync('content/C3-TEAM.ts', 'utf8');
const groupPattern = /members:\s*membersWithImages\("([^"]+)",\s*\[([\s\S]*?)\]\),/g;
const memberPattern = /\{\s*name:\s*"([^"]+)",\s*surname:\s*"([^"]+)"/g;
const jobs = [];
const errors = [];

for (const groupMatch of teamSource.matchAll(groupPattern)) {
  const department = groupMatch[1];
  const departmentKey = normalize(department);
  const members = [...groupMatch[2].matchAll(memberPattern)];

  members.forEach((memberMatch, index) => {
    const name = memberMatch[1];
    const surname = memberMatch[2];
    const fullName = normalize(`${name}-${surname}`);
    const reversedName = normalize(`${surname}-${name}`);
    const matches = sourceFiles.filter((file) => {
      const sourceName = normalize(basename(file));
      return sourceName.includes(fullName) || sourceName.includes(reversedName);
    });
    const departmentMatches = matches.filter((file) => normalize(dirname(file)).includes(departmentKey));
    const selected = departmentMatches.length === 1
      ? departmentMatches[0]
      : matches.length === 1
        ? matches[0]
        : undefined;

    if (!selected) {
      errors.push(`${department}: impossibile identificare una sola foto per ${name} ${surname}`);
      return;
    }

    jobs.push({
      input: selected,
      output: resolve(
        `public/team/members/${department}/TM${index + 1}-${fullName}.webp`,
      ),
    });
  });
}

if (errors.length > 0) {
  console.error('Importazione annullata:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

if (options['dry-run'] === 'true') {
  console.log(`Simulazione riuscita: identificate ${jobs.length} foto membri.`);
  process.exit(0);
}

for (const job of jobs) {
  mkdirSync(dirname(job.output), { recursive: true });
  await sharp(job.input)
    .rotate()
    .resize(900, 1200, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82, smartSubsample: true })
    .toFile(job.output);
}

console.log(`Preparate ${jobs.length} foto membri in formato 900x1200 WebP.`);
