import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { TabelaComponent } from './pages/tabela/tabela.component';

const routes: Routes = [
  { path: '', component: PesquisaComponent },
  { path: 'resultado', component: TabelaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
