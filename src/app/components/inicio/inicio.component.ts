import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  weather;
  

  constructor(private watherService: WeatherService) { }

  ngOnInit(): void {
  
     
  }

  insertWeather(name: string, code: string, temp: string, hum: string, desc:string, lon:string, lat:string, date: string) {
    this.watherService.insertWeather(name, code, temp, hum, desc, lon, lat, date)
    
  }

  //Obtener clima actual e insertar en base de datos
  getWeather(cityName:string, countryCode:string) {
    this.watherService.getWeather(cityName, countryCode).subscribe(
      res => this.weather = res,
      err => console.log(err),
      () => {
        let d = new Date();

        let date = d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear();
        //console.log(this.weather)
        this.insertWeather(cityName, countryCode, this.weather.main.temp, this.weather.main.humidity, this.weather.weather[0].description, this.weather.coord.lon, this.weather.coord.lat, date.toString())
      }
    )
    
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      
    
    this.getWeather(cityName.value, countryCode.value);

    cityName.value = '';
    countryCode.value = '';
      swal("Correcto", "", "success");
    } else {
      swal("Error", "Por favor coloque datos correctos", "error");
    }
    cityName.focus();

    

    return false;
  }

  getDataWeather() {
    this.watherService.getDataWeather()
  }

 

}
