import { Router } from 'express';

import { CadastrarProduto } from '@modules/produtos/services/CadastrarProduto';
import { DeletarProduto } from '@modules/produtos/services/DeletarProduto';
import { PesquisarProduto } from '@modules/produtos/services/PesquisarProduto';

import ProdutoRepository from '@modules/produtos/infra/typeorm/repositories/ProdutosRepository';

const produtoRouter = Router();


produtoRouter.get('/produtos', async (request, response) => {
  const { pesquisa } = request.query;

  console.log(request.query);

  const parsedValue = pesquisa.toString().toUpperCase();

const produtoRepository = new ProdutoRepository();
  const PesquisarProdutoService = new PesquisarProduto(produtoRepository);

  const produtos = await PesquisarProdutoService.execulte(parsedValue);
  return response.status(200).json(produtos);
});

produtoRouter.post('/produto', async (request, response) => {
  const { codigo, nome } = request.body;

  const NameUpperCase = String(nome).toLocaleUpperCase();
  const produtoRepository = new ProdutoRepository();
  const cadastrarProdutoService = new CadastrarProduto(produtoRepository);

  const novoProduto = await cadastrarProdutoService.execulte({
    codigo,
    nome: NameUpperCase,
  });

  return response.status(201).json(novoProduto);
});

produtoRouter.delete('/produto/:id', async (request, response) => {
  const { id } = request.params;
  const produtoRepository = new ProdutoRepository();
  const DeletaProdutoService = new DeletarProduto(produtoRepository);

  await DeletaProdutoService.execulte(Number(id));

  return response.send();
});

export default produtoRouter;
