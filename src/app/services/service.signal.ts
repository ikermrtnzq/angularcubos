import { Injectable, signal } from "@angular/core";

@Injectable({providedIn : 'root'})
export class ServiceSignal{
    public usuario = signal<string|null>(null);
    async loginAsync(token : string, nombre : string) : Promise<void>{
        sessionStorage.setItem("TOKEN", token);
        this.usuario.set(nombre)
    }
    logout(): void{
        sessionStorage.removeItem("TOKEN");
        this.usuario.set(null)
    }
}