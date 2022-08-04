import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';

const motorcycleController = new MotorcycleController();

const router = Router();

router.route('/motorcycles')
  .post((req, res) => motorcycleController.create(req, res))
  .get((req, res) => motorcycleController.read(req, res));

router.route('/motorcycles/:id')
  .get((req, res) => motorcycleController.readOne(req, res))
  .put((req, res) => motorcycleController.update(req, res))
  .delete((req, res) => motorcycleController.delete(req, res));

export default router;