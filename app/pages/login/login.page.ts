import { Component, OnInit } from '@angular/core';
import { GetValueService } from '../../services/get-value.service';
import { RegistroService, Usuario } from '../../services/registro.service';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios: Usuario[] = [];

  constructor(private registroService: RegistroService, private fb: FormBuilder, private navController: NavController, private alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    var a = 0;
    console.log('primer a' + a);
    this.registroService.getUsuarios().then(datos => {
      this.usuarios = datos;
      if (!datos || datos.length == 0) {
        console.log('No hay usuarios creados');
        this.noUsersMsg();
        return null;
      }
      for (let obj of this.usuarios) {
        if (obj.email == f.email && obj.password == f.password) {
          a = 1;
          console.log('ingresado')
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateForward('/inicio');
          GetValueService.email = obj.email;
          GetValueService.nombre = obj.nombre;
          GetValueService.apellido = obj.apellido;
          return;
        }
      }
      console.log(a);
      if (a === 0) {
        console.log('segundo a' + a);
        this.alertMsg();
      }
    });
  }

  async noUsersMsg() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No hay usuarios creados',
      buttons: ['OK'],
      cssClass: 'alertcss'
    });
    await alert.present();
    return;
  }

  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK'],
      //custom css
      cssClass: 'alertcss'
    });
    await alert.present();
    return;
  }

  alumno = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.alumno);
    GetValueService.correoAlumno = this.alumno.email;

  };
}

