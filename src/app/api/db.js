import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newEntry = req.body;

    // Assuming you want to add to the 'posts' array in this example
    data.posts.push(newEntry);

    // Write the updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Data added successfully', data: newEntry });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
