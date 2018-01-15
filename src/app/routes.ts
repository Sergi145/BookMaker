import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { PublicGuard } from './guards/public.guard';
import { PrivateGuard } from './guards/private.guard';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'home', component: HomeComponent, data: { name: 'Home' }, canActivate: [ PrivateGuard ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];