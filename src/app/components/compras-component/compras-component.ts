import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Compra } from '../../models/compra';
import { ServiceLogin } from '../../services/service.login';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compras-component',
  standalone: false,
  styleUrl: './compras-component.css',
  templateUrl: './compras-component.html',
})
export class ComprasComponent implements OnInit{
  public compras! : Array<Compra>;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceLogin,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ){}
  async ngOnInit(): Promise<void> {
    this.compras = await this._service.obtenerComprasAync();
    this._cdr.detectChanges()
  }
}
