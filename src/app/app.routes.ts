import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },{
        path:'tareas',
        component: ListadoComponent
    },
    {
        path:'tareas/:id',
        component: DetalleTareaComponent
    }
];
