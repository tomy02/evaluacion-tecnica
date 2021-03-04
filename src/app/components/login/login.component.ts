import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    

  constructor(private http: HttpClient, ) { }

  ngOnInit(): void {
    window.location.href = 'http://localhost:8888/weather'
  }

  submitLogin(nombre: HTMLInputElement, password: HTMLInputElement) {
    //console.log(nombre.value);

    //console.log(password.value);

    //this.Login(nombre.value, password.value);
    return false;
  }

  Login() {
    //nombre: string, password: string
    //this.loginService.Login(nombre, password)

    
  
  }
  

}
