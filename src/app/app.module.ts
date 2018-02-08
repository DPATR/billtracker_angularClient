import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';

import { BillModule } from './bill/bill.module';
import { BillRoutingModule } from './bill/bill-routing.module';
import { BillService } from './bill/bill.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    //LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    BillModule,
    BillRoutingModule
  ],
  providers: [AuthService, BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
