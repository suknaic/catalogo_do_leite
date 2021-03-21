import { getRepository } from 'typeorm';

import Produto from '../database/model/Produto';

interface Request {
  codigo: string;
  nome: string;
}

export class CadastrarProduto {
  public async execulte({ codigo, nome }: Request): Promise<Produto> {
    const ProdutoRepository = getRepository(Produto);

    const checkCodigo = await ProdutoRepository.findOne({
      where: { codigo },
    });

    if (checkCodigo) throw new Error('produto já está cadastrado');

    const novoProduto = ProdutoRepository.create({ codigo, nome });

    await ProdutoRepository.save(novoProduto);

    return novoProduto;
  }
}
