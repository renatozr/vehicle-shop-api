import { Router } from 'express';
import carsRoute from './cars';
import motorcycleRoute from './motorcycles';

const router = Router();

router.use(carsRoute);
router.use(motorcycleRoute);

export default router;