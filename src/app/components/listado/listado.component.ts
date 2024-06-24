import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'listado',
  standalone: true,
  imports: [CommonModule,TareaComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent  implements OnInit {
  tareas: Tarea[]=[];
  constructor(private tareaService:TareaService){

  }
  ngOnInit():void{
    this.tareas = this.tareaService.getTareas();
  }


}
