import IProdutoDTO from '../dtos/IProdutoDTO';
import Produto from '@modules/produtos/infra/typeorm/entities/Produto';
import { PaginationAwareObject } from 'typeorm-pagination/dist/helpers/pagination';

export default interface IProdutoRepository {
  cadastrar(data: IProdutoDTO): Promise<Produto | undefined>;
  pesquisartodos(valor?: string): Promise<PaginationAwareObject | undefined>;
  pesquisarCodigo(codigo: string): Promise<Produto | undefined>;
  deletar(id: number): Promise<void>;
}

/**
 *  interface que proporciona uma ligação lógica entre
 * partes do sistema que não poderiam ser conectados diretamente.
 *
 * */
