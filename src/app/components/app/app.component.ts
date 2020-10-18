import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parte15';

  constructor(
    private _http: HttpClient
  ){
    //this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //this._http.get('https://jsonplaceholder.typicode.com/users', {responseType: 'text'}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //this._http.get('https://jsonplaceholder.typicode.com/users', {headers: {'content-Type': 'multipart/form-data'}}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //this._http.get('https://jsonplaceholder.typicode.com/users', {observe: "response"}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //this._http.get('https://jsonplaceholder.typicode.com/users', {params: {'hola': '3'}}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //Pruebas Post, se Debe mandar en FormData()
    let form = new FormData();
    form.append('archivo', 'texto');
    //this._http.post('https://jsonplaceholder.typicode.com/users', form, {headers: {'Content-Type': 'multipart/form-data'}}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //Pruebas Delete
    //this._http.delete('https://jsonplaceholder.typicode.com/users', {params: {id: '1'}}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));

    //Pruebas Patch
    this._http.patch('https://jsonplaceholder.typicode.com/users', {nuevoNombre: 'Ruben'}, {params: {id: '1'}}).subscribe(datos => console.log(datos), err => console.log(err), () => console.log("Peticion Finalizada"));
  }
}
