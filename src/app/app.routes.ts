import { Routes } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home Page',
    },
    {
        path: 'contact_me',
        component: EmailFormComponent,
        title: 'Send Message',
    }
];
