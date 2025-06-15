import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from API' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});