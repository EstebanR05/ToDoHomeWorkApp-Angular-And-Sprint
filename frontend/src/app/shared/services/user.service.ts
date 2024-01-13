import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIJammy } from '../interfaces/APIJammy';
import { APItareas } from '../interfaces/tareas';
import { CookieService } from 'ngx-cookie-service';

export const UserServiceActionTap: Subject<any> = new Subject<any>();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  valorID: any = this._cookieService.get('ID');

  //url usuarios xampp
  ApiUrl: string = 'http://localhost/jammy/backend/PHP/usuarios/api.php';
  //url usuarios servidor
  //ApiUrl: string = 'https://ema.puntodepagos.com/php/usuarios/api.php';

  //url tareas xampp
  APItareas: string = 'http://localhost/jammy/backend/PHP/tareas/tareas.php';
  //url tareas servidor
  //APItareas: string = 'https://ema.puntodepagos.com/php/tareas/tareas.php';

  constructor(
    private HttpUsuarios: HttpClient,
    private _cookieService: CookieService
  ) { }

  getAll(): Observable<any> {
    return this.HttpUsuarios.get<APIJammy>(this.ApiUrl);
  }

  tareas() {
    return this.HttpUsuarios.get(this.APItareas + '?consultar=' + this.valorID);
  }

  AgregarTarea(datos: APItareas) {
    return this.HttpUsuarios.post<APItareas>(this.APItareas + '?insertar=1', datos);
  }

  BorrarTarea(id: any) {
    return this.HttpUsuarios.get(this.APItareas + '?borrar=' + id);
  }

  EnviarImagen(file: any): Observable<any> {
    return this.HttpUsuarios.post(this.ApiUrl + "?image=1", file);
  }

}
