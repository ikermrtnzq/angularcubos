import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login-component/login-component';
import { Usuario } from '../../models/usuario';
import { ServiceLogin } from '../../services/service.login';
import { Credencial } from '../../models/credencial';

@Component({
  selector: 'app-crear-usuario-component',
  standalone: false,
  styleUrl: './crear-usuario-component.css',
  templateUrl: './crear-usuario-component.html',
})
export class CrearUsuarioComponent {
  @ViewChild("cajapwd") cajapwd! : ElementRef;
  @ViewChild("cajanombre") cajanombre! : ElementRef;
  @ViewChild("cajaemail") cajaemail! : ElementRef;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceLogin,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ){}

  async crear(): Promise<void> {
    let nombre = this.cajanombre.nativeElement.value;
    let email = this.cajaemail.nativeElement.value;
    let pwd = this.cajapwd.nativeElement.value;
    let id = 0
    let alumno = new Usuario(id,nombre,email,pwd)
    await this._service.crearUsuarioAsync(alumno)
    console.log("SE HA CREADO")
    this._cdr.detectChanges();
    await this._service.logout();
    let credencial = new Credencial(nombre,pwd)
    this._service.postLogin(credencial);
    this._router.navigate(["/miperfil"]);

  }

}
