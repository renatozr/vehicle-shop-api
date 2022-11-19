import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import errorMiddleware from './middlewares/error';
import specs from './swagger';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
