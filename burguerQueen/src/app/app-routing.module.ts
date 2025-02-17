import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContaintWaiterComponent } from './containt-waiter/containt-waiter.component';
import { TomarPedidoComponent } from './containt-waiter/tomar-pedido/tomar-pedido.component';

const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'waiter', component: ContaintWaiterComponent},
{path: 'waiter/tomar-pedido', component: TomarPedidoComponent},
{path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
