import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Importacion del Modulo FormsModule utilizado en la linea 14
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule, /** Se llamo al modulo FormsModule para que funcione el la directiva ngModel en el app.componente.html linea 2 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
