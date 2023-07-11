import {Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() datosGuardados = new EventEmitter<any>();

    nombre ='';
    CIF = '';
    direccion = '';
    grupo = '';
  
    clientes:any = [];


  addClient() {
    this.clientes.push({
      nombre: this.nombre,
      CIF: this.CIF,
      direccion: this.direccion,
      grupo: this.grupo,
    });
  }
  ngOnInit(): void {}
}
