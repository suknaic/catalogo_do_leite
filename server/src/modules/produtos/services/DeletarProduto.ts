import { getRepository } from 'typeorm';

import IProdutoRepository from '../repositories/IProduto';

export class DeletarProduto {
  constructor(private produtoRepository: IProdutoRepository) {}

  public async execulte(id: number): Promise<void> {
    await this.produtoRepository.deletar(id);
  }
}
