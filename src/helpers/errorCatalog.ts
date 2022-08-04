export enum ErrorType {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponse = {
  httpStatus: number,
  message: string,
};

type ErrorCatalog = {
  [key in ErrorType]: ErrorResponse
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    httpStatus: 404,
    message: 'Object not found',
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};