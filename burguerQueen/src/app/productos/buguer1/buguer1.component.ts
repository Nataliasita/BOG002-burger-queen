import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buguer1',
  templateUrl: './buguer1.component.html',
  styleUrls: ['./buguer1.component.css']
})
export class Buguer1Component implements OnInit {
  burguerOp1:Boolean = true
  burguerOp2:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
