import { Router } from 'express';

const produtoRouter = Router();

produtoRouter.get('/produtos', (request, response) => {
  return response
    .status(200)
    .json({ message: 'listar produtos com paginacao' });
});

produtoRouter.post('/produto', (request, response) => {
  return response.status(200).json({ message: 'cadastrar produto' });
});

produtoRouter.delete('/deletar/:id', (request, response) => {
  return response.status(200).json({ message: 'deleta produto' });
});

export default produtoRouter;
