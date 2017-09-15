import { Restaurante } from './restaurante.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restautante',
  templateUrl: './restautante.component.html',
  styleUrls: ['./restautante.component.css']
})
export class RestautanteComponent implements OnInit {


  @Input() restaurante: Restaurante;
  
  constructor() { }

  ngOnInit() {
  }

}
