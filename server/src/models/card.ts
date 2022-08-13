import { PrismaClient } from '@prisma/client';
import { Card } from '../types/types';
const prisma = new PrismaClient();

export const createBlueCard = async(answer: string, userId: string): Promise<Card> => {
  const card = await prisma.blueCard.create({
    data: {
      Answer: answer,
      User: {
        connect: {
          id: userId,
        }
      }
    }
  })
  return card;
}