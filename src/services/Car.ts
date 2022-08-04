import Service from './Service';
import CarModel from '../models/Car';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService extends Service<ICar> {
  constructor(carModel: IModel<ICar> = new CarModel()) {
    super(carModel, CarZodSchema);
  }
}