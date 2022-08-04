import { isValidObjectId, Model as mongooseModel } from 'mongoose';
import { ErrorType } from '../helpers/errorCatalog';
import { IModel } from '../interfaces/IModel';

export default abstract class Model<T> implements IModel<T> {
  protected _query: mongooseModel<T>;

  constructor(model: mongooseModel<T>) {
    this._query = model;
  }

  async create(obj: T): Promise<T> {
    return this._query.create(obj);
  }

  async read(): Promise<T[]> {
    return this._query.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(ErrorType.InvalidMongoId);

    return this._query.findById(id);
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(ErrorType.InvalidMongoId);

    return this._query.findByIdAndUpdate(id, obj, { new: true });
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(ErrorType.InvalidMongoId);

    return this._query.findByIdAndRemove(id);
  }
}