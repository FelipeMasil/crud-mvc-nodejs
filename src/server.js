import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes.js'


const app = express();

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log(`Rodando na porta ${process.env.SERVER_PORT}`))