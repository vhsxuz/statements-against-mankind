import { Router } from 'express';
import { register } from '../controllers/auth.controller';
const router = Router();

// create new user 
router.route('/register').post(register);

router.route('/login').post((req, res, next) => {
  return res.send('wow login');
});

// login to exsisting user
// router.route('/login').post();

export default router; 