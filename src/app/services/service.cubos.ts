import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Cubo } from "../models/cubo";

@Injectable()
export class ServiceCubos{
    url= environment.url
    constructor(
        private _http : HttpClient
    ){}
    async obtenerMarcasAsync() : Promise<string[]>{
        //creamos un objeto header para el type
        let endpoint= "api/Cubos/Marcas";
        return firstValueFrom(
            this._http.get<string[]>(this.url+endpoint)
        )
    }
    async obtenerCubosAsync() : Promise<Cubo[]>{
        //creamos un objeto header para el type
        let endpoint= "api/Cubos";
        return firstValueFrom(
            this._http.get<Cubo[]>(this.url+endpoint)
        )
    }
    async obtenerCubosMarcaAsync(marca : string) : Promise<Cubo[]>{
        //creamos un objeto header para el type
        let endpoint= "api/Cubos/CubosMarca/"+ marca;
        return firstValueFrom(
            this._http.get<Cubo[]>(this.url+endpoint)
        )
    }
}