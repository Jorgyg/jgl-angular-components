import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() datosGuardados = new EventEmitter<any>();

  title = 'form';
  nombre = '';
  email = '';
  mensaje = '';
  num1 = this.randomNumber();
  num2 = this.randomNumber();
  suma: number = 0;
  resultado: number = 0;
  sumCorrect = false;
  formEnviado: boolean = false;
  usuario:any  = {};

  constructor() {
    this.num1 = this.randomNumber();
    this.num2 = this.randomNumber();
    this.resultado = this.num1 + this.num2;
  }

  sendForm() {
    this.formEnviado = true;
    if(this.suma == this.resultado){
      this.sumCorrect = true;
    }
    if (!this.nombre || !this.email || !this.mensaje || !this.sumCorrect) {
      return;
    }
    this.usuario = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };
  }


  randomNumber(){
    return Math.floor(Math.random() * 10) + 1;
  }

  ngOnInit(): void {}
}
