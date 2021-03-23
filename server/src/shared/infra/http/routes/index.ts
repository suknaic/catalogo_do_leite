import { Router } from 'express';

import produtoRouter from '@modules/produtos/infra/http/routes/produto.routes';

const routes = Router();

routes.use('/', produtoRouter);

export default routes;
