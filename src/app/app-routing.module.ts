import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modal/user/pages/login.component';
import { SplashComponent } from './modules/splash/page/splash.component';

import { ClienteResolverService } from './services/cliente-resolver.service';
import { AuthGuard } from './shared/components/guards/auth.guard';
import { RegisterComponent } from './modal/user/pages/register.component';

const routes: Routes = [
  {path: 'splash', component:SplashComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'cliente',
      loadChildren: () => import('./modules/clientes/cliente.module').then(m => m.ClienteModule),
      canLoad:[AuthGuard],
      resolve: {cliente: ClienteResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
