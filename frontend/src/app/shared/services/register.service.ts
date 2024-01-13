import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIJammy } from "../interfaces/APIJammy";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //url usuarios xampp
  ApiUrl: string = 'http://localhost/jammy/backend/PHP/usuarios/api.php';
  //url usuarios servidor
  // ApiUrl: string = 'https://ema.puntodepagos.com/php/usuarios/api.php';

  constructor(
    private HttpUsuarios: HttpClient
  ) { }

  AgregarUsuario(datos: APIJammy):Observable<any> {
    return this.HttpUsuarios.post<APIJammy>(this.ApiUrl + '?insertar=1', datos);
  }

}
