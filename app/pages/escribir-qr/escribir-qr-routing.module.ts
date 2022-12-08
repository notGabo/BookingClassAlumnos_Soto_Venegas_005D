import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirQrPage } from './escribir-qr.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirQrPageRoutingModule {}
