import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burguer2',
  templateUrl: './burguer2.component.html',
  styleUrls: ['./burguer2.component.css']
})
export class Burguer2Component implements OnInit {
  burguerOp1:Boolean = true
  burguerOp2:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
