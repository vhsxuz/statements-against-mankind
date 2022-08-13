import { JwtPayload, sign, SignOptions, verify, VerifyOptions } from 'jsonwebtoken';
import { TokenPayload, User } from '../types/types';
import dotenv from 'dotenv';
import { CustomError } from '../errors';
dotenv.config();

export const generateToken = async (id: string, passwordHash: string) => {
  const payload = {
    id: id,
    passwordHash: passwordHash,
  }

  const secretKey: string | undefined = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new CustomError('JWT key not Provided');
  }

  const opt: SignOptions = {
    // algorithm: 'RS256',
    expiresIn: '1h',
  }

  const token = sign(payload, secretKey, opt);
  return token;
}

export const validateToken = async (token: string): Promise<any> => {
  const secretKey: string | undefined = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new CustomError('JWT key not Provided');
  }

  const decoded = verify(token, secretKey);
  return decoded;
}