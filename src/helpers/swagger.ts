import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vehicle Shop API',
      version: '1.0.0',
      description: 'REST API que gerencia dados de uma concessionária.',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./src/routes/*'],
};

const specs = swaggerJsDoc(options);

export default specs;