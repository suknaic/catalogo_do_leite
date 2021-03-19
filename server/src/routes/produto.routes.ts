import { Router } from 'express';

import { CadastrarProduto } from '../services/CadastrarProduto';
import { DeletarProduto } from '../services/DeletarProduto';
import { PesquisarProduto } from '../services/PesquisarProduto';

const produtoRouter = Router();

produtoRouter.get('/produtos', async (request, response) => {
  const { pesquisa } = request.query;

  const parsedValue = pesquisa.toString().toUpperCase();

  const PesquisarProdutoService = new PesquisarProduto();

  const produtos = await PesquisarProdutoService.execulte(parsedValue);
  return response.status(200).json(produtos);
});

produtoRouter.post('/produto', async (request, response) => {
  const { codigo, nome } = request.body;

  const cadastrarProdutoService = new CadastrarProduto();

  const novoProduto = await cadastrarProdutoService.execulte({ codigo, nome });

  return response.status(201).json(novoProduto);
});

produtoRouter.delete('/produto/:id', async (request, response) => {
  const { id } = request.params;

  const DeletaProdutoService = new DeletarProduto();

  await DeletaProdutoService.execulte(id);

  return response.send();
});

export default produtoRouter;
