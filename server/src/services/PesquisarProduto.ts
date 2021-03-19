import { getRepository, Like } from 'typeorm';

import Produto from '../database/model/Produto';

export class PesquisarProduto {
  public async execulte(value: string): Promise<Produto[]> {
    try {
      const ProdutoRepository = getRepository(Produto);

      if (!!value) {
        const resultado = await ProdutoRepository.find({
          where: [{ nome: Like(`%${value}%`) }, { codigo: Like(`${value}%`) }],
        });
        return resultado;
      }

      const resultado = await ProdutoRepository.find();
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }
}
