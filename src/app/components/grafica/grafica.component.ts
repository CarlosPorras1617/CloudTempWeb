import { Component, OnInit } from '@angular/core';

//import date
import {DatePipe} from '@angular/common';
//imports
import { TemperaturasService } from 'src/app/services/temperaturas.service';
import { Temperaturas } from 'src/app/models/temperaturas';

//canvasJS
declare var CanvasJS: any;
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
  providers:[DatePipe, TemperaturasService]
})
export class GraficaComponent implements OnInit {

  constructor(private datePipe: DatePipe, public temperaturasService: TemperaturasService) { }

  ngOnInit(): void {
    this.getTemps();
  }

  getTemps(){
    var temperaturaOptima = 0;
    var temperaturaAlta = 0;
    var temperaturaMedia = 0;
    //let menores : Array<Number> = [];
    var date = new Date();
    var dateFormat = this.datePipe.transform(date,"yyyy-MM-dd");
    console.log(typeof(dateFormat) + " " + dateFormat);


    this.temperaturasService.getTemps().subscribe(res =>{
      //to array
      this.temperaturasService.temperaturas = res as Temperaturas[];

      //for to cicle all temps an types
      for(var i=0; i< this.temperaturasService.temperaturas.length; i++){
        var temp = this.temperaturasService.temperaturas as Temperaturas[];
        if(temp[i].temperatura < 18 && temp[i].fecha == dateFormat){
          temperaturaOptima++;
          //menores.push(temp[i].temperatura);
        }
        else if(temp[i].temperatura >18 && temp[i].temperatura < 27 && temp[i].fecha == dateFormat){
          temperaturaOptima++;
          //menores.push(temp[i].temperatura);
        }
        else if(temp[i].temperatura >27 && temp[i].temperatura < 28 && temp[i].fecha == dateFormat){
          temperaturaMedia++;
        }
        else if(temp[i].temperatura >28 && temp[i].fecha == dateFormat){
          temperaturaAlta++;
        }
      }
      //console.log("Las temperaturas menores a 18 son: " + menores);
      console.log("Temperaturas optimas= " + temperaturaOptima + " Temperaturas medias= " + temperaturaMedia + " Temperaturas Altas = " + temperaturaAlta)
            //estructura de la tabla
            var chart = new CanvasJS.Chart("chartContainer",{
              animationEnabled: true,
              exportEnabled: true,
              theme: "light2",
              title: {
                text: "Rangos de temperatura en el dia actual"
              },
              axisX:{
                title: "Temperatura"
              },
              axisY:{
                title: "Grados"
              },
              data:[{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}",
                indexLabelFontSize: 25,
                dataPoints: [
                  { y: temperaturaOptima, label: "Temperaturas Óptimas" },
                  { y: temperaturaMedia, label: "Temperaturas Alertas" },
                  { y: temperaturaAlta, label: "Temperaturas Críticas" }
                ]
              }]
            });
      
            //renderizar tabla para que sea visible
            chart.render();
    });
  }

  getActualDate(){
    var date = new Date();
    var dateFormat = this.datePipe.transform(date,"yyyy-MM-dd");
    return dateFormat;
  }
}
