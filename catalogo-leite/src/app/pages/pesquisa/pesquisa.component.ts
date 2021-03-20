import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {
  public busca = '';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  async handleInputValue(value: string): Promise<void> {
    try {
      this.busca = value;
      await this.route.navigate(['resultado'], {
        state: { page: 1, busca: this.busca },
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async getProdutos(): Promise<void> {}
}
