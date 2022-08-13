import { PrismaClient } from '@prisma/client';
import sha256 from '../utils/hash.utils';
import {User} from '../types/types'
const prisma = new PrismaClient();

export const createUser = async(username: string, password: string) => {
  const passwordHash = sha256(password);
  const registeredUser: object = await prisma.user.create({
    data: {
      username: username,
      passwordHash: passwordHash,
    }
  });
  return registeredUser;
}

export const getUser = async(param: object[]): Promise<User | null> => {
  const searchedUser: User | null = await prisma.user.findFirst({
    where: {
      AND: param
    },
    select: {
      id: true,
      username: true,
      passwordHash: true,
    }
  });
  return searchedUser;
}
