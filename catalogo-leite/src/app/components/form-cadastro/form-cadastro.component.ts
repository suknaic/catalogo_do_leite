import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/Produto.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  providers: [ProdutoService],
})
export class FormCadastroComponent implements OnInit {
  @Output()
  public value: EventEmitter<string>;

  public CadastroForm = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl(''),
  });

  constructor(private produtoService: ProdutoService) {
    this.value = new EventEmitter();
  }

  ngOnInit(): void {}

  public async onSubmit(): Promise<void> {
    const produto = await this.produtoService.cadastrar(
      this.CadastroForm.value,
    );

    this.value.emit(produto.nome);
  }
}
