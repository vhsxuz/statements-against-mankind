import { Router } from 'express';
import { getGameSessionCard, postBlueCard, postRedCard } from '../controllers/card.controller';

const router = Router();

// Create new Card
router.route('/blue').post(postBlueCard);
router.route('/red').post(postRedCard);

// Get Single Card
router.route('/cardID').get();

// Get 4 Blue + 1 Red Cards
router.route('/ffa').get(getGameSessionCard);

// Get All Cards
router.route('/').get();

export default router; 