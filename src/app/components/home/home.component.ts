import { Component, OnInit } from '@angular/core';

//importaciones
import { TemperaturasService } from 'src/app/services/temperaturas.service';
import { NgForm } from '@angular/forms';
import { Temperaturas } from 'src/app/models/temperaturas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers
  providers:[TemperaturasService]
})
export class HomeComponent implements OnInit {
  tempOptima;
  tempAlerta;
  tempCritica;
  constructor(public temperaturasService: TemperaturasService) { 
    this.tempOptima = 18,
    this.tempAlerta = 20;
    this.tempCritica = 23;
   }

  ngOnInit(): void {

    //obtener temperaturas
    this.getTemps();
  }
  
  getTemps(){
    this.temperaturasService.getTemps().subscribe(res=>{
      var temps = this.temperaturasService.temperaturas = res as Temperaturas[];
      console.log(temps);
    })
  }
}
