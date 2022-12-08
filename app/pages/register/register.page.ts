import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroService, Usuario } from '../../services/registro.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];

  constructor(private registroService: RegistroService,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder,
    private navController: NavController) {
    this.formularioRegistro = this.fb.group({
      'email': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async CrearUsuario() {
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      this.alertError();
    } else {
      this.newUsuario.email = form.email;
      this.newUsuario.password = form.password;
      this.newUsuario.nombre = form.nombre.charAt(0).toUpperCase() + form.nombre.slice(1).toLowerCase();
      this.newUsuario.apellido = form.apellido.charAt(0).toUpperCase() + form.apellido.slice(1).toLowerCase();
      this.registroService.addDatos(this.newUsuario).then(dato => {
        this.newUsuario = <Usuario>{};
        this.alertRegistro();
        this.showToast('Usuario creado');
      });
      this.formularioRegistro.reset();
    }
  };


  async alertRegistro() {
    const alertRegistro = await this.alertController.create({
      header: '¡Cuenta creada!',
      message: '¿Deseas loguearte?',
      buttons: [
        {
          text: 'Si',
          role: 'Confirm',
          handler: () => {
            this.navController.navigateForward('/login');
          },
        },
        {
          text: 'No',
          role: 'Cancel'
        }
      ],
      cssClass: 'alertcss'
    })
    await alertRegistro.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Por favor, revise los datos ingresados y vuelva a intentarlo',
      buttons: ['OK'],
      //custom css
      cssClass: 'alertcss'
    });
    await alert.present();
  };

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastcss'
    });
    await toast.present();
  };

  async RevisarCorreo() {
    var a = 0;
    var f = this.formularioRegistro.value;

    this.registroService.getUsuarios().then(datos => {
      this.usuarios = datos;
      if (!datos || datos.length == 0) {
        console.log('No hay usuarios creados');
      }
      else {
        for (let obj of this.usuarios) {
          if (obj.email == f.email) { // aca quedamos.
            a = 1;
            console.log(f.email);
          }
        }
      }
      console.log(a)
      if (a == 0) {
        this.CrearUsuario();
      } else {
        this.alertEmail();
      }
    });
  };

  async alertEmail() {
    const alert = await this.alertController.create({
      header: 'Email ya registrado',
      message: 'Por favor, pruebe con otro email',
      buttons: ['OK'],
      //custom css
      cssClass: 'alertcss'
    });
    await alert.present();
  };
}