import { getRepository, Like } from 'typeorm';

import Produto from '../database/model/Produto';

export class PesquisarProduto {
  public async execulte(value: string): Promise<any> {
    try {
      const ProdutoRepository = getRepository(Produto);

      if (!!value) {
        const resultado = await ProdutoRepository.createQueryBuilder()
          .where([{ nome: Like(`%${value}%`) }, { codigo: Like(`${value}%`) }])
          .paginate(10);

        return resultado;
      }

      const resultado = await ProdutoRepository.createQueryBuilder(
        'produtos',
      ).paginate(10);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }
}
