import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containt-waiter',
  templateUrl: './containt-waiter.component.html',
  styleUrls: ['./containt-waiter.component.css']
})
export class ContaintWaiterComponent implements OnInit {
desayuno:boolean=true
  constructor() { 
  }

  ngOnInit(): void {
    
  }
cambio_main(){
  this.desayuno=false
}



}
