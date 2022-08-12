// external dependencies
import express, {Express} from 'express';
import dotenv from 'dotenv';
require('express-async-errors');

dotenv.config();

const app: Express = express(); 
const port = process.env.PORT; 

app.use(express.json()); 

app.listen(port, () => {
  console.log(`[*] Server Running on Port ${port}`);
});