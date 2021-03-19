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

  handleInputValue(event: Event): void {
    const { value = '' } = event.target as HTMLInputElement;
    this.busca = value;
  }

  public async getProdutos(): Promise<void> {
    try {
      await this.route.navigate(['resultado'], {
        queryParams: { page: 1, busca: this.busca },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
