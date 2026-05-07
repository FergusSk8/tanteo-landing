import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'dist/analog/public/_worker.js');
const oldFile = path.join(targetDir, 'index.mjs');
const newFile = path.join(targetDir, 'index.js');

if (fs.existsSync(oldFile)) {
    fs.renameSync(oldFile, newFile);
    console.log('✅ Worker renombrado exitosamente a .js');
} else {
    console.log('ℹ️ No se requiere renombrado o el archivo no existe.');
}