import { PrismaClient } from '@prisma/client';
import { CustomError } from '../errors';
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

export const getRandomRedCard = async(): Promise<Card | null> => {
  const productsCount = await prisma.redCard.count();
  const skip = Math.floor(Math.random() * productsCount);
  const card: Card | null = await prisma.redCard.findFirst({
    skip: skip,
  })
  return card;
}