import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import AuthenticationError from '../errors/auth-error';
import sha256 from '../utils/hash.utils';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if(!username || !password) {
    throw new AuthenticationError('Credential(s) Not Valid')
  }
  const passwordHash = sha256(password);
  const registeredUser: object = await prisma.user.create({
    data: {
      username: username,
      passwordHash: passwordHash,
    }
  })
  return res.status(StatusCodes.CREATED).json({
    registeredUser,
  })
}

export const login = async(req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body; 
  if(!username || !password) {
    throw new AuthenticationError('Credential(s) Not Valid')
  }
  
}