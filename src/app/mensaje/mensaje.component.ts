import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})

export class MensajeComponent {

  num1:number=20
  num2:number=15
  suma:number=this.num1+this.num2
  mensaje="Aprendiendo Angular!!"
}
