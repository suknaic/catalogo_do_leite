import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pesquisa-input',
  templateUrl: './pesquisa-input.component.html',
  styleUrls: ['./pesquisa-input.component.scss'],
})
export class PesquisaInputComponent implements OnInit {
  @Output()
  public value: EventEmitter<string>;

  public inputValue = '';

  constructor() {
    this.value = new EventEmitter();
  }

  ngOnInit(): void {}

  handleInputValue(event: Event): void {
    const { value = '' } = event.target as HTMLInputElement;
    this.inputValue = value;
  }

  public async getValue(): Promise<void> {
    this.value.emit(this.inputValue);
    this.inputValue = '';
  }
}
