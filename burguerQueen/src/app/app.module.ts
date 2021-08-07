import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContaintWaiterComponent } from './containt-waiter/containt-waiter.component';
import { CommonModule } from '@angular/common';
import { TomarPedidoComponent } from './containt-waiter/tomar-pedido/tomar-pedido.component';
import { ContadorComponent } from './contador/contador.component';
import { Buguer1Component } from './productos/buguer1/buguer1.component';
import { Burguer2Component } from './productos/burguer2/burguer2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContaintWaiterComponent,
    TomarPedidoComponent,
    ContadorComponent,
    Buguer1Component,
    Burguer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
