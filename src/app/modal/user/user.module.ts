import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './componentes/register-form/register-form.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
