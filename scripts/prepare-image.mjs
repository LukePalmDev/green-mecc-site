import { existsSync, mkdirSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const DEPARTMENTS = new Set([
  'management',
  'chassis',
  'mechanical-design',
  'strategy',
  'electronics',
  'aerodynamics',
  'design-communication',
  'logistics-pr',
]);

const PRESETS = {
  member: { directory: 'public/team/members', prefix: 'TM', width: 900, height: 1200 },
  cover: { directory: 'public/team/covers', prefix: 'TC', width: 1600, height: 900 },
  vehicle: { directory: 'public/vehicles', prefix: 'V', width: 1800, height: 1200 },
  result: { directory: 'public/results', prefix: 'R', width: 1800, height: 1200 },
};

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

const normalizeName = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.'’]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toUpperCase();

const fail = (message) => {
  console.error(`Errore: ${message}`);
  process.exit(1);
};

const [kind] = process.argv.slice(2);
const options = parseArguments(process.argv.slice(3));
const preset = PRESETS[kind];

if (!preset) {
  fail('usa uno dei tipi: member, cover, vehicle, result');
}

if (!options.input || !options.order || !options.name) {
  fail('sono obbligatori --input, --order e --name');
}

const input = resolve(options.input);
if (!existsSync(input)) fail(`file sorgente non trovato: ${input}`);

const order = Number(options.order);
if (!Number.isInteger(order) || order < 1) fail('--order deve essere un numero positivo');

let outputDirectory = preset.directory;
if (kind === 'member') {
  if (!options.department || !DEPARTMENTS.has(options.department)) {
    fail(`--department deve essere uno fra: ${[...DEPARTMENTS].join(', ')}`);
  }
  outputDirectory += `/${options.department}`;
}

const fileName = `${preset.prefix}${order}-${normalizeName(options.name)}.webp`;
const output = resolve(outputDirectory, fileName);

if (existsSync(output) && options.force !== 'true') {
  fail(`${output} esiste gia'; aggiungi --force=true per sostituirlo`);
}

mkdirSync(dirname(output), { recursive: true });

await sharp(input)
  .rotate()
  .resize(preset.width, preset.height, {
    fit: 'cover',
    position: options.position ?? 'attention',
  })
  .webp({ quality: 82, smartSubsample: true })
  .toFile(output);

console.log(`Creato ${output}`);
console.log(`Sorgente: ${basename(input)}`);
console.log(`Formato: ${preset.width}x${preset.height} WebP`);
