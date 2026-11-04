import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import { Credencial } from '../../models/credencial';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajacontrasenia") cajacontrasenia! : ElementRef;
  private _serviceAuth : ServiceSignal = inject(ServiceSignal);

  constructor(
    private _service : ServiceLogin,
    private _router: Router,
  ){}
  async login():Promise<void>{
    let nombre = this.cajaNombre.nativeElement.value;
    let pwd = this.cajacontrasenia.nativeElement.value;
    let credenciales = new Credencial(nombre,pwd);
    let response = await this._service.postLogin(credenciales);
    sessionStorage.setItem("TOKEN", response.response)
    await this._serviceAuth.loginAsync(response.response, nombre)
    this._router.navigate(["/home"])
  }
}
