import { RestauranteService } from './restaurante.service';
import { Restaurante } from './restautante/restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

   restaurantes: Restaurante[];
  

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.mostraTodosRestaurantes();
  }

  mostraTodosRestaurantes(){
    this.restauranteService.restaurantes()
    .subscribe(restaurantes => {
      this.restaurantes = restaurantes;
     
      // if(this.restaurantes.length > 0){
      //   alert('restaurantes carregados')
      // }
    });
  }

}
