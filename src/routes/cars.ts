import { Router } from 'express';
import CarController from '../controllers/Car';

const carController = new CarController();

const router = Router();

router.route('/cars')
  .post((req, res) => carController.create(req, res))
  .get((req, res) => carController.read(req, res));

router.route('/cars/:id')
  .get((req, res) => carController.readOne(req, res))
  .put((req, res) => carController.update(req, res))
  .delete((req, res) => carController.delete(req, res));

export default router;