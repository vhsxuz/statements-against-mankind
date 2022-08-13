import { sign, SignOptions, verify, VerifyOptions } from 'jsonwebtoken';
import { TokenPayload } from '../types/types';
import * as fs from 'fs';
import * as path from 'path';
import { asyncReadFile } from './readfile.utils';

export const generateToken = async (id: string, passwordHash: string) => {
  const payload = {
    id: id,
    passwordHash: passwordHash,
  }

  const secretKey: string = await asyncReadFile('../../../private.key');

  const opt: SignOptions = {
    algorithm: 'RS256',
    expiresIn: '1h',
  }

  const token = sign(payload, secretKey, opt);
  return token;
}

export const validateToken = async (token: string): Promise<TokenPayload> => {
  const publicKey = await asyncReadFile('../../../public.key'); 

  const opt: VerifyOptions = {
    algorithms: ['RS256'],
  }
  return new Promise(async (resolve, reject) => {
    const decoded = verify(token, publicKey, opt)
    return decoded; 
  })
}