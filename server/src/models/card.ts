import { PrismaClient } from '@prisma/client';
import { CustomError } from '../errors';
import { Card } from '../types/types';
import shuffle from '../utils/shuffle.util'
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
  const cardsCount = await prisma.redCard.count();
  const skip = Math.floor(Math.random() * cardsCount);
  const card: Card | null = await prisma.redCard.findFirst({
    skip: skip,
  })
  if(!card) {
    throw new CustomError('Red Card Error');
  }
  return card;
}

export const getRandomBlueCards = async(): Promise<Card[] | null> => {
  const cardsCount = await prisma.redCard.count();
  const skip = Math.floor(Math.random() * cardsCount);
  const cards: Card[] | null = await prisma.blueCard.findMany({
    take: 5,
    skip: skip,
  })
  if(!cards) {
    throw new CustomError('Blue Card Error');
  }
  return shuffle(cards);
}