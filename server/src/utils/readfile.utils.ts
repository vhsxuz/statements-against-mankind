import * as fs from 'fs';

export const asyncReadFile = async(filePath: string) => {
  const data = await fs.promises.readFile(filePath, 'utf-8');
  return data;
}