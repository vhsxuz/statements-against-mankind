import { PrismaClient } from '@prisma/client';
import { Card } from '../types/types';
const prisma = new PrismaClient();

export const createBlueCard = async(answer: string): Promise<Card> => {
  const card = await prisma.blueCard.create({
    data: {
      answer: answer,
    }
  });
  return card;
}

export const createRedCard = async(question: string): Promise<Card> => {
  const card = await prisma.redCard.create({
    data: {
      question: question,
    }
  });
  return card; 
}