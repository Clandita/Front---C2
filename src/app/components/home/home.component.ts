import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,TareaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tareas: Tarea[]=[];
  constructor(private tareaService:TareaService){

  }
  ngOnInit():void{
    this.tareas = this.tareaService.getTareas();
  }


}
