import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import errorMiddleware from './middlewares/error';
import specs from './swagger';

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(routes);
app.use(errorMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
