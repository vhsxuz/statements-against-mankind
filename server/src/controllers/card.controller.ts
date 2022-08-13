import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors';
import { createBlueCard } from '../models/card';
import { Card } from '../types/types';

export const postBlueCard = async (req: Request, res: Response, next: NextFunction) => {
  const answer: string = req.body.answer;
  const userId: string = req.body.user.userId;
  if (!answer || !userId) {
    throw new BadRequestError('Complete information not provided');
  }
  const card: Card = await createBlueCard(answer, userId);
  return res.status(StatusCodes.CREATED).json({
    userId: userId,
    card: card,
  })
}

const getCard = async (req: Request, res: Response, next: NextFunction) => {

}

const getAllCards = async (req: Request, res: Response, next: NextFunction) => {

}