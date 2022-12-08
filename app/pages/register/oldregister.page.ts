import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroService, Usuario } from '../../services/registro.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GetValueService } from '../../services/get-value.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private registroService: RegistroService,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'email': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'repetirPassword': new FormControl('', Validators.required),
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
      this.newUsuario.nombre = form.nombre;
      this.newUsuario.repetirPassword = form.repetirPassword;
      this.registroService.addDatos(this.newUsuario).then(dato => {
        this.newUsuario = <Usuario>{};
        this.showToast('Usuario creado');
      });
      this.formularioRegistro.reset();
    }
  };

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Por favor, rellene todos los campos',
      buttons: ['OK']
    });
    await alert.present();
  };

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  };

  async RevisarCorreo() {
    var a = 0;
    var usuarios;
    var form = this.formularioRegistro.value;

    this.registroService.getUsuarios().then(datos => {
      usuarios = datos;
      if (!datos || datos.length == 0) {
        console.log('No hay usuarios creados');
      }
      else {
        for (let obj of usuarios) {
          if (obj.email == this.formularioRegistro.e) { // aca quedamos.
            a = 1;
            console.log(this.newUsuario.email);
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
      buttons: ['OK']
    });
    await alert.present();
  };

  registro = {
    email: '',
    password: '',
    repetirEmail: '',
    repetirPassword: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.registro);
  };
}