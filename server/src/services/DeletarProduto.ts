import { getRepository } from 'typeorm';

import Produto from '../database/model/Produto';

export class DeletarProduto {
  public async execulte(id: string): Promise<void> {
    try {
      const ProdutoRepository = getRepository(Produto);
      await ProdutoRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
