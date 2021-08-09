import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContaintWaiterComponent } from './containt-waiter/containt-waiter.component';
import { CommonModule } from '@angular/common';
import { TomarPedidoComponent } from './containt-waiter/tomar-pedido/tomar-pedido.component';
import { ContadorComponent } from './contador/contador.component';
import { Buguer1Component } from './productos/buguer1/buguer1.component';
import { Burguer2Component } from './productos/burguer2/burguer2.component';
import { Burguer3Component } from './productos/burguer3/burguer3.component';
import { Acompanamiento1Component } from './productos/acompanamiento1/acompanamiento1.component';
import { Acompanamiento2Component } from './productos/acompanamiento2/acompanamiento2.component';
import { AguaComponent } from './productos/agua/agua.component';
import { GaseosaComponent } from './productos/gaseosa/gaseosa.component';
import { ViewMainComponent } from './views/view-main/view-main.component';
import { OrderViewComponent } from './views/order-view/order-view.component';
import { ItemContadorComponent } from './item/item-contador/item-contador.component';
import { ItemOrderComponent } from './item/item-order/item-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContaintWaiterComponent,
    TomarPedidoComponent,
    ContadorComponent,
    Buguer1Component,
    Burguer2Component,
    Burguer3Component,
    Acompanamiento1Component,
    Acompanamiento2Component,
    AguaComponent,
    GaseosaComponent,
    ViewMainComponent,
    OrderViewComponent,
    ItemContadorComponent,
    ItemOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
