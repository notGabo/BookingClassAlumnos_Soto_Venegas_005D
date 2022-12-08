import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escribir-qr',
  templateUrl: './escribir-qr.page.html',
  styleUrls: ['./escribir-qr.page.scss'],
})
export class EscribirQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clase = {
    codigo: '',
  };

  onSubmit() {
    console.log('Codigo enviado');
    console.log(this.clase);
  };
}
