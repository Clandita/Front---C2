import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { TareaService } from '../../services/tarea.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'listado',
  standalone: true,
  imports: [CommonModule,TareaComponent,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  providers: [provideNativeDateAdapter()],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent  implements OnInit {
  form:FormGroup;

  tareas: Tarea[]=[];
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  

  constructor(private tareaService:TareaService,private formBuilder:FormBuilder){

  }
  ngOnInit():void{
    this.tareas = this.tareaService.getTareas();
    this.form=this.formBuilder.group({
      
    })
  }


}
