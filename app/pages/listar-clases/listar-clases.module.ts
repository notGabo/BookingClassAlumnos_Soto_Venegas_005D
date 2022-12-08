import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarClasesPageRoutingModule } from './listar-clases-routing.module';

import { ListarClasesPage } from './listar-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarClasesPageRoutingModule
  ],
  declarations: [ListarClasesPage]
})
export class ListarClasesPageModule {}
