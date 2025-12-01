import { Routes } from '@angular/router';
import { Home } from './components/home/home/home';
import { Reviews } from './components/footer/reviews/reviews';
import { Main } from './components/main/main/main';

export const routes: Routes = [

    {path: '', component:Home, title:'Catálogo de Servicios Turísticos', children: [
        {path: '', component:Main},
        {path: 'reviews', component:Reviews, title:'Reseñas'}
    ]}


];
