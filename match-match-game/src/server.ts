import express, { Request, Response } from 'express';

const path = require('path');
const app = express();

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.resolve('index.html'));
});

app.listen(process.env.PORT || 5060, () => console.log('Server running'));