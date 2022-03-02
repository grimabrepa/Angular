import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Marcelo';// interpolacion utilizada  en la app.component.html linea 1 y 2
  url = "https://static2.abc.es/media/bienestar/2021/07/06/helados-saludables-kCwD--1200x630@abc.jpg";// interpolacion utilizada  en la app.component.html linea 4
  gustos = ["Vainilla", "Frutilla", "Limon", "Chocolate"];// interpolacion utilizada  en la app.component.html linea 7
}
