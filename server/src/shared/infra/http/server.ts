import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import '@shared/infra/typeorm';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';

import routes from './routes';
import AppError from '@shared/error/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(routes);

// middleware handleError captura e lanca todos os erros na api
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

app.listen(3333, () => console.log('server on port 3333'));
