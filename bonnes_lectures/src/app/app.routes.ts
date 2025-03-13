import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ListeBookComponent } from './liste-book/liste-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

export const routes: Routes = [
    {path : 'about', component: AboutComponent},
    {path : 'welcome' , component : WelcomeComponent},
    {path : 'menu' , component : MenuComponent},
    {path : '', component : MenuComponent},
    {path : 'livres', component : ListeBookComponent},
    {path: 'nouveau', component: CreateBookComponent}
];
