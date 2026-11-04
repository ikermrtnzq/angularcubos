import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public cubos! : Array<Cubo>;
  public mensaje!: string;

  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceCubos,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ){}

  seleccionarFavorito(event: Cubo): void {
    console.log("HEMOS LLEGADO AL PADRE");
    this.mensaje = "Su Cubo favorito es " + event.nombre;
  }
  
  async ngOnInit(): Promise<void> {
    this._activeRouter.params.subscribe(async(params: Params) => {
      if(params['marca']){
        let marca = params['marca'];
        console.log(marca)
        this.cubos= await this._service.obtenerCubosMarcaAsync(marca);  
      }else{
        this.cubos= await this._service.obtenerCubosAsync();  
      }   
      this._cdr.detectChanges()
    })
    this._cdr.detectChanges();
  }
}
