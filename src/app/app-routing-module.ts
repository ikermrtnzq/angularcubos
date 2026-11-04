import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth.guard';
import { ComprarComponent } from './components/comprar-component/comprar-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { CrearUsuarioComponent } from './components/crear-usuario-component/crear-usuario-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ErrorComponent } from './components/error-component/error-component';

const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "home/:marca", component: HomeComponent},    
    { path: "", component: LoginComponent},
    { path: "perfil", component: HomeComponent, canActivate: [AuthGuard]},
    { path: "comprar", component: ComprarComponent, canActivate: [AuthGuard]},
    { path: "compras", component: ComprasComponent, canActivate: [AuthGuard]},
    { path: "crearusuario", component: CrearUsuarioComponent, canActivate: [AuthGuard]},
    { path: "miperfil", component: PerfilComponent, canActivate: [AuthGuard]},
    { path: "error", component: ErrorComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
