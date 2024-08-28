import express, { Request, Response } from 'express';

const app = express();
const port = 2000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Render with TypeScript!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
