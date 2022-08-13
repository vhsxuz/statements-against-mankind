import CustomError from './custom';
import { StatusCodes } from 'http-status-codes';

class AuthenticationError extends CustomError {
  constructor(message: string) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export default AuthenticationError;