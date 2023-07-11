import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea';
  tareas:any = [];
  
  addTarea(tarea:any) {  
    this.tareas.push(tarea);
  }
}
