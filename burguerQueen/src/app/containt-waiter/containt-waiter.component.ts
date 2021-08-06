import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containt-waiter',
  templateUrl: './containt-waiter.component.html',
  styleUrls: ['./containt-waiter.component.css']
})
export class ContaintWaiterComponent implements OnInit {
  
  show:Boolean =true

  constructor() { 
  }

  ngOnInit(): void {
    
  }

 tomarpedido(){
  this.show=false
 }

}
