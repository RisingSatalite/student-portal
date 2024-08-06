import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  res.status(200).json(data);
}
