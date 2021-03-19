import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto.model';

@Injectable()
export class ProdutoService {
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  public getProdutos(value: string, page: number): Promise<any> {
    return this.http
      .get(`http://localhost:3333/produtos?page=${page}&pesquisa=${value}`)
      .toPromise();
  }
}
