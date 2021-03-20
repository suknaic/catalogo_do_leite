import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto.model';

@Injectable()
export class ProdutoService {
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  public getProdutos(value?: string, page?: number): Promise<any> {
    return this.http
      .get(`${this.url}/produtos?page=${page}&pesquisa=${value}`)
      .toPromise();
  }

  public cadastrar(produto: Produto): Promise<Produto> {
    return this.http.post<Produto>(`${this.url}/produto`, produto).toPromise();
  }
}
