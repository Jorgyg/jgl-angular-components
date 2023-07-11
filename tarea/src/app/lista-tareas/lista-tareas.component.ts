import { Component, Input } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  @Input() tareas:any = {};

  changeC(index: number): void {
    this.tareas[index].completada = true;
  }

  delete(index: number): void {
    this.tareas.splice(index, 1);
  }
}
