import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, CustomError } from '../errors';
import { createBlueCard, createRedCard, getRandomRedCard, getRandomBlueCards } from '../models/card';
import { Card } from '../types/types';

export const postBlueCard = async (req: Request, res: Response, next: NextFunction) => {
  const answer: string = req.body.answer;
  const userId: string = req.body.user.id;
  if (!answer || !userId) {
    throw new BadRequestError('Complete information not provided');
  }
  const card: Card = await createBlueCard(answer);
  return res.status(StatusCodes.CREATED).json({
    success: true,
    card: card,
  });
}

export const postRedCard = async (req: Request, res: Response, next: NextFunction) => {
  const question: string = req.body.question;
  const userId: string = req.body.user.id;
  if (!question || !userId) {
    throw new BadRequestError('Complete information not provided');
  }
  const card: Card = await createRedCard(question);
  return res.status(StatusCodes.CREATED).json({
    success: true,
    card: card,
  });
}

export const getGameSessionCard = async (req: Request, res: Response, next: NextFunction) => {
  const redCard: Card | null = await getRandomRedCard();
  const blueCards: Card[] | null = await getRandomBlueCards();
  if (!redCard) {
    throw new CustomError('No Card(s) available');
  }
  return res.status(StatusCodes.OK).json({
    success: true,
    redCard: redCard,
    blueCards: blueCards,
  });
};

const getCard = async (req: Request, res: Response, next: NextFunction) => {

}

const getAllCards = async (req: Request, res: Response, next: NextFunction) => {

}