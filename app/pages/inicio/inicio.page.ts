import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetValueService } from '../../services/get-value.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController, private registroService: RegistroService, private toastController: ToastController) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  public getName() {
    return GetValueService.nombre;
  }

}
