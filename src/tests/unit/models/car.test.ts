import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarModel from '../../../models/Car';
import { car, carsWithId, carWithId } from '../mocks/car';
import { ErrorType } from '../../../helpers/errorCatalog';

describe('Car Model', () => {
  const carModel = new CarModel();
  const invalidMongoId = '123';

  before(() => {
    sinon.stub(Model, 'create').resolves(carWithId);
    sinon.stub(Model, 'find').resolves(carsWithId);
    sinon.stub(Model, 'findById').resolves(carWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carWithId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: return created car', async () => {
      const result = await carModel.create(car);

      expect(result).to.be.equal(carWithId);
    });
  });

  describe('Method read', () => {
    it('Success: return cars', async () => {
      const result = await carModel.read();

      expect(result).to.be.equal(carsWithId);
    });
  });

  describe('Method readOne', () => {
    it('Success: return found car', async () => {
      const result = await carModel.readOne(carWithId._id);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await carModel.readOne(invalidMongoId);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });

  describe('Method update', () => {
    it('Success: return updated car', async () => {
      const result = await carModel.update(carWithId._id, car);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await carModel.update(invalidMongoId, car);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });

  describe('Method delete', () => {
    it('Success: return deleted car', async () => {
      const result = await carModel.delete(carWithId._id);

      expect(result).to.be.equal(carWithId);
    });

    it('Error: InvalidMongoId', async () => {
      try {
        await carModel.delete(invalidMongoId);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorType.InvalidMongoId);
      }
    });
  });
});