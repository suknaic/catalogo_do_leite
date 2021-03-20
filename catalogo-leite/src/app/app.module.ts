import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// rotiamento do angular
import { AppRoutingModule } from './app-routing.module';

// componentes e paginas
import { AppComponent } from './app.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { PesquisaInputComponent } from './components/pesquisa-input/pesquisa-input.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';

// angular bootstrap
import { NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    TabelaComponent,
    PesquisaInputComponent,
    FormCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [NgbPagination],
  bootstrap: [AppComponent],
})
export class AppModule {}
