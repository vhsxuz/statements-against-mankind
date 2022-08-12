// external dependencies
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
require('express-async-errors');

dotenv.config();

// middleware
import notFoundMiddleware from './middlewares/not-found';
import customErrorHandler from './middlewares/error-handler';

const app: Express = express(); 
const port = process.env.PORT; 

app.use(express.json()); 

app.use('/api/v1/', (req: Request, res: Response) => {
  return res.status(200).json({success: true, msg: 'Success'});
});

app.use(notFoundMiddleware); 
app.use(customErrorHandler); 

app.listen(port, () => {
  console.log(`[*] Server Running on Port ${port}`);
});