import express, { Express, Request, Response, NextFunction } from 'express';
import AuthenticationError from '../errors/auth-error';
import { TokenPayload } from '../types/types';

import { validateToken } from '../utils/jwt.util';

export default async (req: Request, res: Response, next: NextFunction) => {
  let jwt: string | undefined = req.headers.authorization;
  if (!jwt) {
    throw new AuthenticationError('Token not available');
  }
  if (!jwt.startsWith('Bearer ')) {
    throw new AuthenticationError('Token not valid');
  }

  let decodedToken = await validateToken(jwt.split(' ')[1]);
  try {
    const { id, passwordHash } = decodedToken;
    req.body.user = {
      id: id,
      passwordHash: passwordHash,
    }
    console.log(id, passwordHash);
    return next();
  }
  catch (err: any) {
    const msg = err.message || 'Not Authorized to Perform the Action in this Route'
    throw new AuthenticationError(msg);
  }
}
