import { Routes } from '@angular/router';
import { Reviews } from './components/reviews/reviews';
import { Main } from './components/main/main';
import { Home } from './layouts/home/home';
import { Servicios } from './components/servicios-turisticos/servicios/servicios';

export const routes: Routes = [

    {path: '', component:Home, title:'Catálogo de Servicios Turísticos', children:[
        {path: '', component:Main},
        {path: 'servicios', component:Servicios, title:'Servicios'},
        {path: 'reviews' , component:Reviews, title:'Reseñas'}
    ]}


];
