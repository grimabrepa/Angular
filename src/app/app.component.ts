import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Practica de Angular';// interpolacion utilizada  en la app.component.html linea 1 
  url = "https://static2.abc.es/media/bienestar/2021/07/06/helados-saludables-kCwD--1200x630@abc.jpg";// interpolacion utilizada  en la app.component.html linea 4
  gustos = ["Vainilla", "Frutilla", "Limon", "Chocolate"];// interpolacion utilizada  en la app.component.html linea 7
  nombre!:string;//interpolacion utilizada  en la app.component.html linea 2 y 3
  precios =[150, 300, 500, 750, 900, 1200]
  meses =["Enero", "Febrero", "Marzo", "Abril"];
}
