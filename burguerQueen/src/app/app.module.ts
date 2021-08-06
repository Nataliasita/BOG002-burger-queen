import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContaintWaiterComponent } from './containt-waiter/containt-waiter.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { TomarPedidoComponent } from './containt-waiter/tomar-pedido/tomar-pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContaintWaiterComponent,
    ProductsComponent,
    TomarPedidoComponent,
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
