export interface IService<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T>;
  update(id: string, obj: T): Promise<T>;
  delete(id: string): Promise<T>;
}