import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto.model';
import { Observable } from 'rxjs';

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

  public deletar(id: number): Promise<void> {
    return this.http.delete<void>(`${this.url}/produto/${id}`).toPromise();
  }
}
