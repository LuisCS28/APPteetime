import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {


  dataClima:any;
  constructor( public menuController: MenuController ) { }

  ngOnInit() {
    this.getDataClima();
    console.log(this.dataClima);
    console.log("aqui se ejecuta la api");
    
    
  }

  
  openMenu() { 
    this.menuController.toggle('principal');
  }

  getDataClima(){
    let data = JSON.parse('{"coord":{"lon":-74.098,"lat":4.8094},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":290.15,"feels_like":289.45,"temp_min":290.15,"temp_max":290.15,"pressure":1025,"humidity":59},"visibility":10000,"wind":{"speed":7.72,"deg":160},"clouds":{"all":75},"dt":1618260633,"sys":{"type":1,"id":8582,"country":"CO","sunrise":1618224630,"sunset":1618268594},"timezone":-18000,"id":3685733,"name":"Cota","cod":200}');
    this.setDataClima(data);
  }
  setDataClima(data){
    this.dataClima = data;
    let sunsetTime = new Date(this.dataClima.sys.sunset * 1000);
    this.dataClima.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.dataClima.isDay = (currentDate.getTime() < sunsetTime.getTime() );
    this.dataClima.temp_celcius = (this.dataClima.main.temp - 273.15).toFixed(0);
    this.dataClima.temp_min = (this.dataClima.main.temp_min - 273.15).toFixed(0);
    this.dataClima.temp_max = (this.dataClima.main.temp_max - 273.15).toFixed(0);
    this.dataClima.pressure = (this.dataClima.main.pressure - 273.15).toFixed(0);
    this.dataClima.temp_feels_like = (this.dataClima.main.temp_feels_like - 273.15).toFixed(0);

  }

}
