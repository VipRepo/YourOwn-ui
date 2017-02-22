import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent} from './header/header.component';
import { AccordionModule } from 'ng2-bootstrap';
import {DashboardComponent} from './dashboard-layout/dashboard.component';
import {MainContentComponent} from './main-content/main-content.component';
import { routing } from './app.routes';
import {HomeComponent} from './home/home.component';
import { AuthenticationService } from './auth_module/auth/authentication.service';
import { AuthGuard } from './auth_module/auth/auth.guard';
import { LoginComponent } from './auth_module/login/login.component';
import { ProductService } from './services/product.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AccordionModule.forRoot(), routing, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, 
  DashboardComponent, MainContentComponent, HomeComponent, LoginComponent],
  providers: [ AuthenticationService, AuthGuard, ProductService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
