import { NextFunction, Response, Request } from 'express';
import { NotFoundError } from '../errors';

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  return next(new NotFoundError('Route not Found')); 
}

export default notFoundMiddleware; 