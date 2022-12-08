import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  codigoEscaneado: string;

  ngOnInit() {
  }

  async startScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.codigoEscaneado = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}


