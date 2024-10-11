import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'contact_me',
        component: ContactMeComponent,
        title: 'Home Details',
    },
];
