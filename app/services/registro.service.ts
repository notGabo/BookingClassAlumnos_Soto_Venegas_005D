import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
};

const USERS_KEY = 'my-users';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  private _storage: Storage;
  newUsuario: Usuario = <Usuario>{}; // <Usuario>{} es lo mismo que newUsuario(), se genera en base a esa interfaz
  constructor(private storage: Storage) {
    this.init();
  };

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  };

  //Crear un nuevo usuario
  async addDatos(dato: Usuario): Promise<any> {
    return this.storage.get(USERS_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      } else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    });
  };

  //Obtiene usuarios
  async getUsuarios(): Promise<Usuario[]> {
    return await this.storage.get(USERS_KEY);
  }

  //Cierra sesión
  async cerrarSesion() {
    return await this.storage.clear();
  }
}
