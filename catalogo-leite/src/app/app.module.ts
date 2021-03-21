import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// rotiamento do angular
import { AppRoutingModule } from './app-routing.module';

// modulu de ordenacao
import { OrderModule } from 'ngx-order-pipe';

// componentes e paginas
import { AppComponent } from './app.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { PesquisaInputComponent } from './components/pesquisa-input/pesquisa-input.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';

// angular bootstrap
import { NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './components/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    TabelaComponent,
    PesquisaInputComponent,
    FormCadastroComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    OrderModule
  ],
  providers: [NgbPagination],
  bootstrap: [AppComponent],
})
export class AppModule {}
