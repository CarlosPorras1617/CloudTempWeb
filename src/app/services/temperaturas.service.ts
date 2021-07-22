import { Injectable } from '@angular/core';

//imports
import {HttpClient} from '@angular/common/http';
import { Temperaturas } from '../models/temperaturas';

@Injectable({
  providedIn: 'root'
})
export class TemperaturasService {
  temperaturas: Temperaturas[];
  readonly URL_API = 'https://integradora-app.herokuapp.com/api/18b20';
  
  //constructor
  constructor(private http: HttpClient) { 
    //inicializar
    this.temperaturas = [];
   }

   getTemps(){
     return this.http.get(this.URL_API);
   }
}
