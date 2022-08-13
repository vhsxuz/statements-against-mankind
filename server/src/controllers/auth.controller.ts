import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthenticationError from '../errors/auth-error';
import sha256 from '../utils/hash.utils';
import { createUser, getUser } from '../models/user';
import { User } from '../types/types';
import { generateToken } from '../utils/jwt.util';


export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new AuthenticationError('Credential(s) Not Valid')
  }
  const exsistUser = await getUser([{ username: username }]);
  if (exsistUser) {
    throw new AuthenticationError('Username exsisted');
  }
  const registeredUser = await createUser(username, password);

  return res.status(StatusCodes.CREATED).json({
    registeredUser,
  })
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new AuthenticationError('Credential(s) Not Valid')
  }
  const passwordHash = sha256(password);
  const loginUser: User | null = await getUser([{ username: username }, { passwordHash: passwordHash }]);
  if (!loginUser) {
    throw new AuthenticationError('Username or Password is false');
  }
  const { id } = loginUser;
  const token: string = await generateToken(id, passwordHash);
  return res.status(StatusCodes.CREATED).json({
    userToken: token,
  });
}