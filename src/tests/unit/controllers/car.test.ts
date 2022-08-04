import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { car, carsWithId, carWithId } from '../mocks/car';

describe('Car Controller', () => {
  const carService = new CarService();
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carWithId);
    sinon.stub(carService, 'read').resolves(carsWithId);
    sinon.stub(carService, 'readOne').resolves(carWithId);
    sinon.stub(carService, 'update').resolves(carWithId);
    sinon.stub(carService, 'delete').resolves(carWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Method create', () => {
    it('Success: responds status 201 and created car json', async () => {
      req.body = car;

      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithId)).to.be.true;
    });
  });

  describe('Method read', () => {
    it('Success: responds status 200 and cars json', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsWithId)).to.be.true;
    });
  });

  describe('Method readOne', () => {
    it('Success: responds status 200 and found car json', async () => {
      req.params = { id: carWithId._id };

      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithId)).to.be.true;
    });
  });

  describe('Method update', () => {
    it('Success: responds status 200 and updated car json', async () => {
      req.params = { id: carWithId._id };
      req.body = car;

      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithId)).to.be.true;
    });
  });

  describe('Method delete', () => {
    it('Success: responds status 204 and no content', async () => {
      req.params = { id: carWithId._id };

      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledOnce).to.be.true;
    });
  });
});