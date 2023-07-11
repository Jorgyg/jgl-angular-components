import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  @Output() datosGuardados = new EventEmitter<any>();

  titulo: string = '';
  descripcion: string = '';

  agregarTarea(){
    let tarea = { titulo: this.titulo, descripcion: this.descripcion };
    this.datosGuardados.emit(tarea);
  }
}
