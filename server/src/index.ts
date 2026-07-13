import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import hintRoutes from './routes/hint.routes';
dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors()); 

// API Health checks
app.get('/' , (req : Request , res : Response) => {
    res.send("Hi from Codeforces-AI-Hint-Assistant");
});

app.get('/health', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Backend!');
});

app.use('/api/hints', hintRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});