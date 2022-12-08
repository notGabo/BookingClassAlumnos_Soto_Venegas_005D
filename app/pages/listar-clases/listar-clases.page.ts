import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listar-clases',
  templateUrl: './listar-clases.page.html',
  styleUrls: ['./listar-clases.page.scss'],
})
export class ListarClasesPage implements OnInit {

  clases: any;

  constructor(private clasesService: ClasesService, private loadCtrl: LoadingController) { }

  ngOnInit() {
    //this.loadClases();
    this.clasesService.listarClases().subscribe(resp => {
      console.log('Clases', resp);
      this.clases = resp;
      console.log(this.clases);
    });
  }

  //async loadClases(event?: InfiniteScrollCustomEvent) {
  //  const loading = await this.loadCtrl.create({
  //    message: 'Cargando...',
  //    spinner: 'crescent'
  //  });
  //  await loading.present();
  //  //this.clasesService.listarClases().subscribe(
  //  //  (resp) => {
  //  //    loading.dismiss();
  //  //    console.log(resp)
  //  //    let listString = JSON.stringify(resp);
  //  //    this.clases = JSON.parse(listString);
  //  //    event.target.complete();
  //  //
  //  //  },
  //  //  (error) => {
  //  //    loading.dismiss();
  //  //    console.log(error.message);
  //  //  }
  //  //);
  //  this.clasesService.listarClases().subscribe(
  //    (resp) => {
  //      console.log('Clases', resp);
  //      this.clases = resp;
  //      console.log(this.clases);
  //    },
  //    (error) => {
  //      loading.dismiss();
  //      console.log(error.message);
  //    }
  //  );
  //
  //}
}