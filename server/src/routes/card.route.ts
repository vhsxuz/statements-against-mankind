import { Router } from 'express';
import { postBlueCard } from '../controllers/card.controller';

const router = Router();

// Create new Card
router.route('/blue').post(postBlueCard);

// Get Single Card
router.route('/cardID').get();

// Get All Card
router.route('/').get();

export default router; 