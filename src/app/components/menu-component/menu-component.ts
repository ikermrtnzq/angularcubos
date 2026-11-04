import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _serviceAuth : ServiceSignal = inject(ServiceSignal);
  public usuario = this._serviceAuth.usuario;
  public marcas! : Array<string>
  @ViewChild("selectmarca") selectmarca! : ElementRef;
  @ViewChild("selectruta") selectruta! : ElementRef;

  constructor(
    private _router : Router,
    private _service : ServiceCubos,
    private _cdr : ChangeDetectorRef
  ){}
  logout() : void {
    sessionStorage.removeItem("TOKEN");
    this._router.navigate(["/"])
  }
  buscar() : void{
    let marca = this.selectmarca.nativeElement.value
    this._router.navigate(["/home/",marca])
  }
  redirigir(): void{
    let ruta = this.selectruta.nativeElement.value;
    console.log(ruta)
    if(ruta == "miperfil"){
      this._router.navigate(["/miperfil"])
    }else if(ruta == "compras"){
      this._router.navigate(["/compras"])
    }else if(ruta== "comprar"){
      this._router.navigate(["/comprar"])
    }
  }
  async ngOnInit(): Promise<void> {
    this.marcas = await this._service.obtenerMarcasAsync();
    this._cdr.detectChanges();
  }
}
