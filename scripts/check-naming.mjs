import { readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const rules = [
  {
    directory: 'content',
    extension: '.ts',
    pattern: /^C(\d+)-[A-Z]+(?:-[A-Z]+)*\.ts$/,
    firstNumber: 0,
  },
  {
    directory: 'pages',
    extension: '.tsx',
    pattern: /^P(\d+)-[A-Z]+(?:-[A-Z]+)*\.tsx$/,
    firstNumber: 0,
  },
  {
    directory: 'public/departments',
    extension: '.svg',
    pattern: /^D(\d+)-[a-z]+(?:-[a-z]+)*\.svg$/,
    firstNumber: 1,
  },
  {
    directory: 'public/sponsor',
    extension: '.webp',
    pattern: /^S(\d+)-[A-Z]+(?:-[A-Z]+)*\.webp$/,
    firstNumber: 1,
    flat: true,
  },
];

const errors = [];

for (const rule of rules) {
  const entries = readdirSync(rule.directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && extname(entry.name) === rule.extension)
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (rule.flat) {
    for (const entry of entries) {
      if (entry.isDirectory()) {
        errors.push(`${join(rule.directory, entry.name)}: non sono ammesse sottocartelle`);
      }
    }
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
      errors.push(
        `${rule.directory}: numerazione non progressiva, atteso ${expected} ma trovato ${number}`,
      );
    }
  });
}

if (errors.length > 0) {
  console.error('Controllo nomenclatura fallito:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Nomenclatura cartelle verificata.');
