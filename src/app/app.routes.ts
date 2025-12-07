import { Routes } from '@angular/router';
import { Reviews } from './components/reviews/reviews';
import { Main } from './components/main/main';
import { Home } from './layouts/home/home';
import { ServiciosComponent } from './components/servicios-turisticos/servicios/servicios';
import { CrudServicios } from './components/servicios-turisticos/servicios/crud-servicios/crud-servicios';


export const routes: Routes = [

    { path: '', component: Home, title: 'Catálogo de Servicios Turísticos' },
    { path: 'servicios', component: ServiciosComponent, title: 'Servicios Turísticos' },
    { path: 'servicios/crud-servicios', component: CrudServicios, title: 'Crud de Servicios Turísticos' },
    { path: 'reviews', component: Reviews, title: 'Reseñas' }


];
