import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors';
import { createBlueCard, createRedCard } from '../models/card';
import { Card } from '../types/types';

export const postBlueCard = async (req: Request, res: Response, next: NextFunction) => {
  const answer: string = req.body.answer;
  const userId: string = req.body.user.id;
  if (!answer || !userId) {
    throw new BadRequestError('Complete information not provided');
  }
  const card: Card = await createBlueCard(answer);
  return res.status(StatusCodes.CREATED).json({
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
    card: card,
  });
}

const getCard = async (req: Request, res: Response, next: NextFunction) => {

}

const getAllCards = async (req: Request, res: Response, next: NextFunction) => {

}