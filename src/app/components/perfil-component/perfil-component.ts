import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public perfil! : Usuario
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceLogin,
    private _router: Router
  ){}
  async ngOnInit(): Promise<void> {
    this.perfil= await this._service.obtenerPerfilAsync(); 
    this._cdr.detectChanges()
  }
}
