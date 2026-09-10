import { readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const rules = [
  { directory: 'content', extension: '.ts', pattern: /^C(\d+)-[A-Z]+(?:-[A-Z]+)*\.ts$/, firstNumber: 0 },
  { directory: 'pages', extension: '.tsx', pattern: /^P(\d+)-[A-Z]+(?:-[A-Z]+)*\.tsx$/, firstNumber: 0 },
  { directory: 'public/general', extension: '.webp', pattern: /^G(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/, firstNumber: 1, strict: true },
  { directory: 'public/departments', extension: '.svg', pattern: /^D(\d+)-[a-z]+(?:-[a-z]+)*\.svg$/, firstNumber: 1, strict: true },
  { directory: 'public/vehicles', extension: '.webp', pattern: /^V(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/, firstNumber: 1, strict: true },
  { directory: 'public/results', extension: '.webp', pattern: /^R(\d+)-\d{4}\.webp$/, firstNumber: 1, strict: true },
  { directory: 'public/team/covers', extension: '.webp', pattern: /^TC(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/, firstNumber: 1, strict: true },
  { directory: 'public/sponsor', extension: '.webp', pattern: /^S(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/, firstNumber: 1, strict: true, flat: true },
];

const memberDepartments = [
  'management',
  'chassis',
  'mechanical-design',
  'strategy',
  'electronics',
  'aerodynamics',
  'design-communication',
  'logistics-pr',
];

const errors = [];

const validateRule = (rule) => {
  const entries = readdirSync(rule.directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && extname(entry.name) === rule.extension)
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (rule.strict) {
    entries
      .filter((entry) => entry.isFile() && entry.name !== '.DS_Store' && extname(entry.name) !== rule.extension)
      .forEach((entry) => errors.push(`${join(rule.directory, entry.name)}: estensione non ammessa`));
  }

  if (rule.flat) {
    entries
      .filter((entry) => entry.isDirectory())
      .forEach((entry) => errors.push(`${join(rule.directory, entry.name)}: non sono ammesse sottocartelle`));
  }

  const numbers = [];
  for (const file of files) {
    const match = file.match(rule.pattern);
    if (!match) {
      errors.push(`${join(rule.directory, file)}: nome fuori standard`);
      continue;
    }
    numbers.push(Number(match[1]));
  }

  const uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);
  uniqueNumbers.forEach((number, index) => {
    const expected = rule.firstNumber + index;
    if (number !== expected) {
      errors.push(`${rule.directory}: numerazione non progressiva, atteso ${expected} ma trovato ${number}`);
    }
  });
};

rules.forEach(validateRule);

const memberRoot = 'public/team/members';
const actualMemberDepartments = readdirSync(memberRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const department of actualMemberDepartments) {
  if (!memberDepartments.includes(department)) {
    errors.push(`${join(memberRoot, department)}: reparto non riconosciuto`);
    continue;
  }
  validateRule({
    directory: join(memberRoot, department),
    extension: '.webp',
    pattern: /^TM(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/,
    firstNumber: 1,
    strict: true,
  });
}

for (const department of memberDepartments) {
  if (!actualMemberDepartments.includes(department)) {
    errors.push(`${join(memberRoot, department)}: cartella mancante`);
  }
}

const normalizeMemberName = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.'’]/g, '')
    .replace(/[^a-zA-Z]+/g, '-')
    .replace(/^-|-$/g, '')
    .toUpperCase();

const teamSource = readFileSync('content/C3-TEAM.ts', 'utf8');
const groupPattern = /members:\s*membersWithImages\("([^"]+)",\s*\[([\s\S]*?)\]\),/g;
const memberPattern = /\{\s*name:\s*"([^"]+)",\s*surname:\s*"([^"]+)"/g;
const groupsInContent = new Set();

for (const groupMatch of teamSource.matchAll(groupPattern)) {
  const department = groupMatch[1];
  groupsInContent.add(department);
  const expectedFiles = [...groupMatch[2].matchAll(memberPattern)].map(
    (memberMatch, index) =>
      `TM${index + 1}-${normalizeMemberName(`${memberMatch[1]}-${memberMatch[2]}`)}.webp`,
  );
  const actualFiles = readdirSync(join(memberRoot, department))
    .filter((file) => file.endsWith('.webp'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (expectedFiles.join('\n') !== actualFiles.join('\n')) {
    errors.push(
      `${join(memberRoot, department)}: foto non allineate a nomi e ordine in content/C3-TEAM.ts`,
    );
  }
}

for (const department of memberDepartments) {
  if (!groupsInContent.has(department)) {
    errors.push(`content/C3-TEAM.ts: elenco membri mancante per ${department}`);
  }
}

const publicRootImages = readdirSync('public', { withFileTypes: true })
  .filter((entry) => entry.isFile() && /^\.(?:jpe?g|png|webp|gif|svg)$/i.test(extname(entry.name)));
publicRootImages.forEach((entry) => errors.push(`public/${entry.name}: spostare l'asset in una sottocartella`));

if (errors.length > 0) {
  console.error('Controllo nomenclatura fallito:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Nomenclatura cartelle verificata.');
