import { Request, Response } from 'express';
import { IRequestWithBody } from './IRequestWithBody';

export interface IController<T> {
  create(req: IRequestWithBody<T>, res: Response<T>): Promise<Response>;
  read(req: Request, res: Response<T[]>): Promise<Response>;
  readOne(req: Request, res: Response<T>): Promise<Response>;
  update(req: IRequestWithBody<T>, res: Response<T>): Promise<Response>;
  delete(req: Request, res: Response): Promise<void>;
}