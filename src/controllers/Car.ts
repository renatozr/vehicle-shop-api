import Controller from './Controller';
import CarService from '../services/Car';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController extends Controller<ICar> {
  constructor(carService: IService<ICar> = new CarService()) {
    super(carService);
  }
}