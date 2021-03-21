import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';

import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(routes);

app.listen(3333, () => console.log('server on port 3333'));
