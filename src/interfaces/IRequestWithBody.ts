import { Request } from 'express';

export interface IRequestWithBody<T> extends Request {
  body: T;
}