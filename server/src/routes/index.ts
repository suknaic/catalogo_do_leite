import { Router } from 'express';

import produtoRouter from './produto.routes';

const routes = Router();

routes.use('/', produtoRouter);

export default routes;
