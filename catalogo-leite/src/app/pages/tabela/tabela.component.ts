import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/Produto.service';

interface IRequest {
  busca?: string;
  page?: number;
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  providers: [ProdutoService],
})
export class TabelaComponent implements OnInit {
  public produtoComPaginacao: any;
  public busca = '';

  constructor(private produtoService: ProdutoService, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state as {
      busca: string;
      page: number;
    };
    if (state) {
      this.handleData(state);
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {}

  async handleInputValue(value: string): Promise<void> {
    await this.handleData({ busca: value, page: 1 });
  }

  public async handlepage(page: number): Promise<void> {
    await this.handleData({ busca: this.busca, page });
  }

  public async handleData({ busca = '', page }: IRequest): Promise<void> {
    this.busca = busca;
    this.produtoComPaginacao = undefined;
    this.produtoComPaginacao = await this.produtoService.getProdutos(
      busca,
      page,
    );
  }
}
