import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirQrPageRoutingModule } from './escribir-qr-routing.module';

import { EscribirQrPage } from './escribir-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscribirQrPageRoutingModule
  ],
  declarations: [EscribirQrPage]
})
export class EscribirQrPageModule {}
