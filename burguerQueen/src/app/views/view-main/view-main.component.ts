import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {
  desayuno:boolean=false
  lunch:boolean=false
  desayuno1:boolean=false
  bebidas1:boolean=false
  bebidas2:boolean=false
  bebidas3:boolean=false
  burguer1:boolean=false
  burguer2:boolean=false
  burguer3:boolean=false
  acompa1:Boolean=false
  acompa2:Boolean=false
  agua:Boolean=false
  gaseosa:Boolean=false
  
  constructor() { }

  ngOnInit(): void {
  }

}
