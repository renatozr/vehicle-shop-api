import Controller from './Controller';
import MotorcycleService from '../services/Motorcycle';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorcycleController extends Controller<IMotorcycle> {
  constructor(
    motorcycleService: IService<IMotorcycle> = new MotorcycleService(),
  ) {
    super(motorcycleService);
  }
}