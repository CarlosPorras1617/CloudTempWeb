import { Component, OnInit } from '@angular/core';

//imports
import { TemperaturasService } from 'src/app/services/temperaturas.service';
import { Temperaturas } from 'src/app/models/temperaturas';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  //provider
  providers: [ TemperaturasService ]
})
export class RegistroComponent implements OnInit {
  tempOptima;
  tempAlerta;
  tempCritica;
  constructor(public temperaturasService: TemperaturasService) { 
    this.tempOptima = 18,
    this.tempAlerta = 20;
    this.tempCritica = 23;
   }

  ngOnInit(): void {
    //init
    this.getTemps();
  }

  getTemps(){
    this.temperaturasService.getTemps().subscribe(res=>{
      var temps = this.temperaturasService.temperaturas = res as Temperaturas[];
      console.log(temps);
    })
  }

  getTempsByDate(){
    //search input method
    var searchText = (<HTMLInputElement>document.getElementById("searchInput")).value;
    //filter
    if(searchText != ""){
      var filtered_array = this.temperaturasService.temperaturas.filter(function(value){
        return value.fecha.toUpperCase().includes(searchText.toUpperCase())
      });
      this.temperaturasService.temperaturas = filtered_array as Temperaturas[];
    }
    else{
      this.getTemps();
    }
  }
}


