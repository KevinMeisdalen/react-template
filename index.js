#!/usr/bin/env node
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs-extra';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetDir = process.argv[2] || 'my-react-app';

console.log(`\n🚀 Creating new project in "${targetDir}"...\n`);

fs.copySync(join(__dirname, 'template'), targetDir);

process.chdir(targetDir);
console.log('📦 Installing dependencies...\n');
execSync('npm install', { stdio: 'inherit' });

console.log('\n✅ All done!');
console.log(`\nTo start developing:\n  cd ${targetDir}\n  npm run dev\n`);