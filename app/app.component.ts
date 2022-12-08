import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController, private router: Router) { }
  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirectTo: '/inicio',
    },
    {
      icon: 'person-circle-outline',
      name: 'Mi perfil',
      redirectTo: '/perfil'
    },
    {
      icon: 'grid-outline',
      name: 'Menu de alumnos',
      redirectTo: '/menu-alumno'
    },
    {
      icon: 'settings-outline',
      name: 'Configuración',
      redirectTo: '/configuracion'
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirectTo: '/noticias'
    }
  ];

  public hasMenu = true;

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.url in ['/', '/codigo-qr', '/escanear-qr', '/configuracion', '/generador-qr', '/home-alumno', '/home-profesor', '/login-alumno', '/login-profesor', '/menu-alumno', '/register']) {
        this.hasMenu = false;
      }
      else {
        this.hasMenu = true;
      }
    });
  };
}
