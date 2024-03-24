import { Application, Request, Response } from 'express';
import express from 'express';


const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
    res.json({
        "message" : "Hello World!"    
    })
});

export const PORT : number = Number.parseInt(process.env.PORT || '') || 3000;

const server = app.listen(PORT, async (): Promise<void> => {
    console.log('SERVER IS UP ON PORT:', PORT);
});