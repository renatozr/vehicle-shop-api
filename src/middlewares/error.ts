import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorType } from '../helpers/errorCatalog';

export default (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorType;
  const errorResponse = errorCatalog[messageAsErrorType];

  if (errorResponse) {
    const { httpStatus, message } = errorResponse;

    return res.status(httpStatus).json({ error: message });
  }

  console.error(err);
  return res.status(500).json({ message: err.message });
};