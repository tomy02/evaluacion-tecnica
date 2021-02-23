import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '5a48c3471f1790f3cdcad6a26f68ea2d';
  URI: string = '';

  weatherList: AngularFireList<any>;

  constructor(private http: HttpClient, private firebase: AngularFireDatabase) {
      this.URI = `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&lang=es&q=`
  }
  
  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`)
    
  }

  getDataWeather() {
    return this.weatherList = this.firebase.list('/weathers');
    
  }


  insertWeather(name: string, code: string, temp:string, hum: string, desc:string, lon:string, lat:string, date: string) {
    console.log(name);
    this.weatherList = this.firebase.list('/weathers');
    this.weatherList.push({
      cityName: name,
      countryCode: code,
      temperature: temp,
      humidity: hum,
      description: desc,
      longitude: lon,
      latitude: lat,
      date: date
      
    });
    
    
  }

  

}
