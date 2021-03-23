import Produto from '@modules/produtos/infra/typeorm/entities/Produto';
import IProdutoRepository from '../repositories/IProduto';
import AppError from '@shared/error/AppError';

interface IRequest {
  codigo: string;
  nome: string;
}

export class CadastrarProduto {
  constructor(private produtoRepository: IProdutoRepository) {}

  public async execulte({ codigo, nome }: IRequest): Promise<Produto> {
    const checkCodigo = await this.produtoRepository.pesquisarCodigo(codigo);

    if (checkCodigo) throw new AppError('produto já está cadastrado', 400);

    const novoProduto = await this.produtoRepository.cadastrar({
      codigo,
      nome,
    });

    return novoProduto;
  }
}
