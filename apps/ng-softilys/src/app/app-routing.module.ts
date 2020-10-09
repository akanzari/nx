import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'comp', component: TemplateComponent, data: { title: 'Get Started', breadcrumb: 'home' }, children: [
           
        ]
    },
    { path: 'home', component: HomeComponent, data: { title: 'Acceuil' } },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
    providers: [],
    declarations: []
})
export class RoutingModule { }