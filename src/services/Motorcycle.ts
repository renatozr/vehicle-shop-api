import Service from './Service';
import MotorcycleModel from '../models/Motorcycle';
import { MotorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorcycleService extends Service<IMotorcycle> {
  constructor(motorcycleModel: IModel<IMotorcycle> = new MotorcycleModel()) {
    super(motorcycleModel, MotorcycleZodSchema);
  }
}