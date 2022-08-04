import { Request, Response } from 'express';
import { IController } from '../interfaces/IController';
import { IRequestWithBody } from '../interfaces/IRequestWithBody';
import { IService } from '../interfaces/IService';

export default abstract class Controller<T> implements IController<T> {
  protected _entityService: IService<T>;

  constructor(entityService: IService<T>) {
    this._entityService = entityService;
  }

  async create(req: IRequestWithBody<T>, res: Response<T>) {
    const createdEntity = await this._entityService.create({ ...req.body });

    return res.status(201).json(createdEntity);
  }

  async read(_req: Request, res: Response<T[]>) {
    const entities = await this._entityService.read();

    return res.status(200).json(entities);
  }

  async readOne(req: Request, res: Response<T>) {
    const entity = await this._entityService.readOne(req.params.id);

    return res.status(200).json(entity);
  }

  async update(req: IRequestWithBody<T>, res: Response) {
    const { params, body } = req;

    const updatedEntity = await this._entityService
      .update(params.id, { ...body });

    return res.status(200).json(updatedEntity);
  }

  async delete(req: Request, res: Response) {
    await this._entityService.delete(req.params.id);

    return res.status(204).end();
  }
}