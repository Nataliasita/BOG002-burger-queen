import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burguer3',
  templateUrl: './burguer3.component.html',
  styleUrls: ['./burguer3.component.css']
})
export class Burguer3Component implements OnInit {
  burguerOp1:Boolean = true
  burguerOp2:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
