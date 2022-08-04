import { expect } from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { car, carsWithId, carWithId } from '../mocks/car';
import { ErrorType } from '../../../helpers/errorCatalog';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const invalidCar = {
    "model": "Fe",
    "year": 1000,
    "color": "re",
    "buyValue": 3500.1,
    "doorsQty": 10,
    "seatsQty": 1
  };

  before(() => {
    sinon.stub(carModel, 'create').resolves(carWithId);
    sinon.stub(carModel, 'read').resolves(carsWithId);
    sinon.stub(carModel, 'readOne')
      .onFirstCall().resolves(carWithId)
      .onSecondCall().resolves(null);
    sinon.stub(carModel, 'update')
      .onFirstCall().resolves(carWithId)
      .onSecondCall().resolves(null);
    sinon.stub(carModel, 'delete')
      .onFirstCall().resolves(carWithId)
      .onSecondCall().resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: return created car', async () => {
      const result = await carService.create(car);

      expect(result).to.be.equal(carWithId);
    });

    it('ZodParseError: invalid car', async () => {
      try {
        await carService.create(invalidCar);
      } catch (error: any) {
        expect(error).to.be.a.instanceOf(ZodError);
      }
    });
  });

  describe('Method read', () => {
    it('Success: return cars', async () => {
      const result = await carService.read();

      expect(result).to.be.equal(carsWithId);
    });
  });

  describe('Method readOne', () => {
    it('Success: return found car', async () => {
      const result = await carService.readOne(carWithId._id);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await carService.readOne(carWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });

  describe('Method update', () => {
    it('Success: return updated car', async () => {
      const result = await carService.update(carWithId._id, car);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await carService.update(carWithId._id, car);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });

  describe('Method delete', () => {
    it('Success: return deleted car', async () => {
      const result = await carService.delete(carWithId._id);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: EntityNotFound', async () => {
      try {
        await carService.delete(carWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.EntityNotFound);
      }
    });
  });
});