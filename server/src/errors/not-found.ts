import CustomError from './custom';
import {StatusCodes} from 'http-status-codes'

class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message); 
    this.status = StatusCodes.NOT_FOUND; 
  }
}

export default NotFoundError; 