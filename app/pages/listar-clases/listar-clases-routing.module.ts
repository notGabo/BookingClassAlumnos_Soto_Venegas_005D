import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarClasesPage } from './listar-clases.page';

const routes: Routes = [
  {
    path: '',
    component: ListarClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarClasesPageRoutingModule {}
