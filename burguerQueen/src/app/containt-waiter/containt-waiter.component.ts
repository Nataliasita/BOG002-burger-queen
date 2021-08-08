import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containt-waiter',
  templateUrl: './containt-waiter.component.html',
  styleUrls: ['./containt-waiter.component.css']
})
export class ContaintWaiterComponent implements OnInit {
desayuno:boolean=true
cambiar_perfil:Boolean=false
  constructor() { 
  }

  ngOnInit(): void {
    
  }
cambio_main(){
  this.desayuno=false
}



}
