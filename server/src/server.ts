import 'reflect-metadata';
import express from 'express';
import './database';
import { pagination } from 'typeorm-pagination';

import routes from './routes';

const app = express();
app.use(express.json());
app.use(pagination);
app.use(routes);

app.listen(3333, () => console.log('server started on por 3333'));
