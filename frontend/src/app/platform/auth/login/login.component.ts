import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valorID: any;
  formUsuario!: FormGroup;

  constructor(private servicio: LoginService,
    private form: FormBuilder,
    private router: Router,
    private _cookieService: CookieService ) { }

  ngOnInit(): void {
    //hacer que los formularios validen si hay informacion
    this.formUsuario = this.form.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });

  }

  getControl(control: string, form: FormGroup = this.formUsuario): any {
    return form.controls[control];
  }

//subir archivos
  submit() {
    this.servicio.VerificarUsuario(this.formUsuario.value).subscribe((resp) => {
      this._cookieService.set('ID', resp[0].user_id);
      this.router.navigateByUrl('auth/profile').finally(() => window.location.reload());
    })
  }

}
