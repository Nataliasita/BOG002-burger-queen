import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {
  @Input() image:string ='';
  @Input() title:string ='';
  @Input() description:string ='';
  @Input() price:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
