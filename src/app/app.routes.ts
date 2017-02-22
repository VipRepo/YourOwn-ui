import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './auth_module/login/login.component';
import { AuthGuard } from './auth_module/auth/auth.guard';


export const routes: Routes = [
  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children:[
  	{ path: 'products', component: MainContentComponent, outlet: 'mainContent' }

  ] },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);