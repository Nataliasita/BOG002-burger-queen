import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaseosa',
  templateUrl: './gaseosa.component.html',
  styleUrls: ['./gaseosa.component.css']
})
export class GaseosaComponent implements OnInit {
  gaseosa1:Boolean = true
  gaseosa2:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
