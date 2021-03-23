import { getRepository, Repository, Like } from 'typeorm';

import IProdutoDTO from '@modules/produtos/dtos/IProdutoDTO';
import IProdutoRepository from '@modules/produtos/repositories/IProduto';
import { PaginationAwareObject } from 'typeorm-pagination/dist/helpers/pagination';
import Produto from '../entities/Produto';

export default class ProdutoRepository implements IProdutoRepository {
  private ormRepository: Repository<Produto>;

  constructor() {
    this.ormRepository = getRepository(Produto);
  }

  public async cadastrar({
    codigo,
    nome,
  }: IProdutoDTO): Promise<Produto | undefined> {
    const novoProduto = this.ormRepository.create({ codigo, nome });

    await this.ormRepository.save(novoProduto);

    return novoProduto;
  }
  public async pesquisartodos(
    value?: string,
  ): Promise<PaginationAwareObject | undefined> {
    if (!!value) {
      const resultado = await this.ormRepository
        .createQueryBuilder()
        .where([{ nome: Like(`%${value}%`) }, { codigo: Like(`${value}%`) }])
        .paginate(10);

      return resultado;
    }

    const resultado = await this.ormRepository
      .createQueryBuilder('produtos')
      .paginate(10);

    return resultado;
  }

  public async pesquisarCodigo(codigo: string): Promise<Produto | undefined> {
    const produto = await this.ormRepository.findOne({
      where: { codigo },
    });

    return produto;
  }

  public async deletar(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
