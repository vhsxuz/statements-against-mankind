// external dependencies
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';

require('express-async-errors');

dotenv.config();

// middleware
import notFoundMiddleware from './middlewares/not-found';
import customErrorHandler from './middlewares/error-handler';
import authMiddleware from './middlewares/auth-middleware';

// router
import authRouter from './routes/auth.route';
import cardRouter from './routes/card.route';

const app: Express = express(); 
const port = process.env.PORT; 
const prisma = new PrismaClient();

app.use(express.json()); 
app.use(morgan("dev")); 

app.use('/api/v1/ping', (req: Request, res: Response) => {
  return res.status(200).json({success: true, msg: 'Pong'});
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/card', authMiddleware, cardRouter);

app.use(notFoundMiddleware); 
app.use(customErrorHandler); 

app.listen(port, async() => {
  await prisma.$connect();
  console.log(`[*] Server Running on Port ${port}`);
});