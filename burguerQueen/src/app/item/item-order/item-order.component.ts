import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css']
})
export class ItemOrderComponent implements OnInit {
  producto_main:Boolean=true

  items:any;

  constructor(private conexion: ConexionService) { 
    this.conexion.listaitem().subscribe(item => {
      this.items = item;
      console.log(this.items)
    })

  }

  ngOnInit(): void {
  }
//  eliminar_item(item: any){
//    this.conexion.eliminar(item)
//  }
}
