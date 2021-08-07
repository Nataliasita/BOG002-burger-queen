import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css']
})
export class AguaComponent implements OnInit {
  agua1:Boolean = true
  agua2:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
