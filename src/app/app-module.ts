import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { ErrorComponent } from './components/error-component/error-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCubos } from './services/service.cubos';
import { ServiceLogin } from './services/service.login';
import { ServiceSignal } from './services/service.signal';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { CrearUsuarioComponent } from './components/crear-usuario-component/crear-usuario-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { ComprarComponent } from './components/comprar-component/comprar-component';
import { AuthGuard } from './guards/auth.guard';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    CrearUsuarioComponent,
    ComprasComponent,
    ComprarComponent,
    CuboComponent,
    PerfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    ServiceCubos,
    ServiceLogin,
    ServiceSignal,
    AuthGuard,
  ],
  bootstrap: [App],
})
export class AppModule {}
