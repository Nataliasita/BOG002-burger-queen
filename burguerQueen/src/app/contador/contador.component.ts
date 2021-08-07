import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 1;

  constructor() { }

  ngOnInit(): void {
  }
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
