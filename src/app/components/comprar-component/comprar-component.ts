import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';
import { ServiceLogin } from '../../services/service.login';

@Component({
  selector: 'app-comprar-component',
  standalone: false,
  styleUrl: './comprar-component.css',
  templateUrl: './comprar-component.html',
})
export class ComprarComponent implements OnInit{
  public cubos! : Array<Cubo>
  @ViewChild("selectcubo") selectcubo! : ElementRef;

  constructor(
    private _router : Router,
    private _service : ServiceCubos,
    private _service2 : ServiceLogin,
    private _cdr : ChangeDetectorRef
  ){}
  async ngOnInit(): Promise<void> {
    this.cubos = await this._service.obtenerCubosAsync();
    this._cdr.detectChanges()
    
  }

  async comprar(){
    let id = parseInt(this.selectcubo.nativeElement.value)
    await this._service2.crearCompraAync(id);
    this._router.navigate(["/compras"])
  }
}
