import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Restaurante } from './restautante/restaurante.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestauranteService {

  constructor(private http: Http) { }

 
  

//pega apenas o json do response
  restaurantes(): Observable<Restaurante[]>{
   return this.http.get(`${MEAT_API}/restaurants`)
   .map(response => response.json())
   .catch(ErrorHandler.handleError);
  }

}
