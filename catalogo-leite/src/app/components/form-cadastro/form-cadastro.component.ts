import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/Produto.service';

interface Alert {
  type?: string;
  message?: string;
}

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

  public Alert = {} as Alert;

  constructor(private produtoService: ProdutoService) {
    this.value = new EventEmitter();
    this.Alert.type = '';
    this.Alert.message = '';
  }

  ngOnInit(): void {}

  public async onSubmit(): Promise<void> {
    this.handleAlert({});
    try {
      const produto = await this.produtoService.cadastrar(
        this.CadastroForm.value,
      );

      this.value.emit(produto.nome);
      this.CadastroForm.setValue({
        codigo: '',
        nome: '',
      });
    } catch (error) {
      this.Alert.type = 'warning';
      this.Alert.message = error.error.message;
      this.handleAlert({ type: 'warning', message: error.error.message });
    }
  }

  public handleAlert({ type = '', message = '' }: Alert): void {
    this.Alert.type = type;
    this.Alert.message = message;
  }
}
