import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { SplashComponent } from './modules/splash/page/splash.component';
import { LoginComponent } from './modal/user/pages/login.component';

import { HeaderComponent } from './shared/components/header/header.component';

import { HelpersComponent } from './shared/components/helpers/helpers.component';
import { MaterialComponent } from './shared/components/material/material.component';
import { ModelsComponent } from './shared/components/models/models.component';

import { ListadoComponent } from './modules/clientes/listado/listado.component';
import { ListadoDetalleComponent } from './modules/clientes/listado-detalle/listado-detalle.component';
import { RegisterComponent } from './modal/user/pages/register.component';
import { LoginFormComponent } from './modal/user/componentes/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HeaderComponent,
    HelpersComponent,
    MaterialComponent,
    ModelsComponent,
    ListadoComponent,
    ListadoDetalleComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
