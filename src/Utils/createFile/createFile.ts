import fs from 'fs';
import path from 'path';

export const createFileIfDoesNotExist = async (fileName: string) => {
    if (!fs.existsSync(fileName)) {
        fs.mkdirSync(path.dirname(fileName), { recursive: true });
        fs.writeFileSync(fileName, '', 'utf-8');
        console.log(`${fileName} file created`);
    }
}