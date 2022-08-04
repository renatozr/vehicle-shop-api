import { ZodObject, ZodRawShape } from 'zod';
import { IService } from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { ErrorType } from '../helpers/errorCatalog';

export default abstract class Service<T> implements IService<T> {
  protected _entityModel: IModel<T>;
  protected _zodSchema: ZodObject<ZodRawShape>;

  constructor(entityModel: IModel<T>, zodSchema: ZodObject<ZodRawShape>) {
    this._entityModel = entityModel;
    this._zodSchema = zodSchema;
  }

  async create(obj: T): Promise<T> {
    const parsing = this._zodSchema.safeParse(obj);

    if (!parsing.success) throw parsing.error;

    return this._entityModel.create(obj);
  }

  async read(): Promise<T[]> {
    return this._entityModel.read();
  }

  async readOne(id: string): Promise<T> {
    const entity = await this._entityModel.readOne(id);

    if (!entity) throw new Error(ErrorType.EntityNotFound);

    return entity;
  }

  async update(id: string, obj: T): Promise<T> {
    const parsing = this._zodSchema.safeParse(obj);

    if (!parsing.success) throw parsing.error;

    const updatedEntity = await this._entityModel.update(id, obj);

    if (!updatedEntity) throw new Error(ErrorType.EntityNotFound);

    return updatedEntity;
  }

  async delete(id: string): Promise<T> {
    const deletedEntity = await this._entityModel.delete(id);

    if (!deletedEntity) throw new Error(ErrorType.EntityNotFound);

    return deletedEntity;
  }
}