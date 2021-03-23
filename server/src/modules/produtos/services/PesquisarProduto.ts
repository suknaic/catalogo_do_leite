import IProdutoRepository from '../repositories/IProduto';

export class PesquisarProduto {
  constructor(private produtoRepository: IProdutoRepository) {}
  public async execulte(value: string): Promise<any> {
    const resultado = await this.produtoRepository.pesquisartodos(value);

    return resultado;
  }
}
