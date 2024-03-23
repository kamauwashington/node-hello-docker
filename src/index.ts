import { Application, Request, Response } from 'express';
import express from 'express';
import { PORT } from './config';

const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
    res.json({
        "message" : "Hello World!"    
    })
});

const server = app.listen(PORT, async (): Promise<void> => {
    console.log('SERVER IS UP ON PORT:', PORT);
});