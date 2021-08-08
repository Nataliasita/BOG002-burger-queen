import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-contador',
  templateUrl: './item-contador.component.html',
  styleUrls: ['./item-contador.component.css']
})
export class ItemContadorComponent implements OnInit {
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
