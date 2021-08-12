import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-buguer1',
  templateUrl: './buguer1.component.html',
  styleUrls: ['./buguer1.component.css']
})
export class Buguer1Component implements OnInit {
  burguerOp1:Boolean = true
  burguerOp2:Boolean = true

  item:any ={
    producto:"Hamburguesa de Res Doble carne Queen 182",
    valor:"10"
  }

  constructor(private servicio:ConexionService) { }

  ngOnInit(): void {
  }
  agregarBurguer(){
    this.servicio.addItem(this.item)
    this.item = '';
  }
}
