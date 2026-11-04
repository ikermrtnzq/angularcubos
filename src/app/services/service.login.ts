import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Credencial } from "../models/credencial";
import { firstValueFrom, Observable } from "rxjs";
import { SKIP_TOKEN } from "../utils/token.context";
import { Usuario } from "../models/usuario";
import { Compra } from "../models/compra";

@Injectable()
export class ServiceLogin{
    url = environment.url;
    constructor(
        private _http : HttpClient
    ){}

    async postLogin(credenciales : Credencial): Promise<any>{
        let endpoint = "api/Manage/login";
        let json = JSON.stringify(credenciales);
        let header = new HttpHeaders().set("content-type","application/json");
        return firstValueFrom(
            this._http.post(this.url+endpoint, json, {headers: header,  context : new HttpContext().set(SKIP_TOKEN, true)})
        )
    }
    async logout(): Promise<void>{
        sessionStorage.removeItem("TOKEN");

    }

    async obtenerPerfilAsync():Promise<Usuario>{
        let endpoint= "api/Manage/PerfilUsuario";
        return firstValueFrom(
            this._http.get<Usuario>(this.url+endpoint)
        )
    }

    async crearUsuarioAsync(usuario : Usuario): Promise<any>{
        let endpoint = "api/Manage/RegistroUsuario";
        let json = JSON.stringify(usuario);
        let header = new HttpHeaders().set("content-type","application/json");
        await firstValueFrom(
            this._http.post(this.url + endpoint, json, {headers : header})
        )
    }
    async crearCompraAync(id : number): Promise<any> {
        let endpoint= "api/Compra/InsertarPedido/" + id;
        let json = JSON.stringify(id);
        let header = new HttpHeaders().set("content-type","application/json");
        await firstValueFrom(
                this._http.post(this.url + endpoint, json, {headers : header})
        );
    }
    async obtenerComprasAync():Promise<Compra[]>{
        let endpoint= "api/Compra/ComprasUsuario";
        return firstValueFrom(
            this._http.get<Compra[]>(this.url+endpoint)
        )
    }
}
