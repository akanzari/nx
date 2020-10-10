import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartedComponent } from '@showcase/started';
import { ButtonComponent } from '@showcase/button';

import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'comp', component: TemplateComponent, data: { title: 'Get Started', breadcrumb: 'home' }, children: [
            { path: 'get_started', component: StartedComponent, data: { title: 'Get Started' } },
            {
                path: 'button_demo', component: ButtonComponent, data: {
                    title: 'Démonstration du composant bouton',
                    breadcrumb: 'bouton'
                }
            },
        ]
    },
    { path: 'home', component: HomeComponent, data: { title: 'Acceuil' } },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class RoutingModule { }