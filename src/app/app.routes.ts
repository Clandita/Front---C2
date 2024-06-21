import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },{
        path:'tareas',
        component: ListadoComponent
    }
];
