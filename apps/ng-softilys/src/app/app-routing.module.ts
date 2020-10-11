import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Acceuil' } },
    {
        path: 'showcase', component: TemplateComponent, data: { title: 'Get Started', breadcrumb: 'home' }, children: [
            { path: 'setup', loadChildren: () => import('@showcase/started/src/lib/started.module').then(m => m.StartedModule), data: { title: 'Get Started' } },
            {
                path: 'button', loadChildren: () => import('@showcase/button/src/lib/button.module').then(m => m.ButtonModule), data: {
                    title: 'Démonstration du composant bouton',
                    breadcrumb: 'bouton'
                }
            },
            {
                path: 'calendar', loadChildren: () => import('@showcase/calendar/src/lib/calendar.module').then(m => m.CalendarModule), data: {
                    title: 'Démonstration du composant Calendar',
                    breadcrumb: 'Calendar'
                }
            },
            {
                path: 'card', loadChildren: () => import('@showcase/card/src/lib/card.module').then(m => m.CardModule), data: {
                    title: 'Démonstration du composant card',
                    breadcrumb: 'card'
                }
            },
            {
                path: 'card-container', loadChildren: () => import('@showcase/card-container/src/lib/card-container.module').then(m => m.CardContainerModule), data: {
                    title: 'Démonstration du composant card-container',
                    breadcrumb: 'card container'
                }
            },
            {
                path: 'chart', loadChildren: () => import('@showcase/chart/src/lib/chart.module').then(m => m.ChartModule), data: {
                    title: 'Démonstration du composant chart',
                    breadcrumb: 'breadcrumb'
                }
            },
            {
                path: 'checkbox', loadChildren: () => import('@showcase/checkbox/src/lib/checkbox.module').then(m => m.CheckboxModule), data: {
                    title: 'Démonstration du composant check-box',
                    breadcrumb: 'check-box & radio-box'
                }
            },
            {
                path: 'double-date-picker', loadChildren: () => import('@showcase/double-date-picker/src/lib/double-date-picker.module').then(m => m.DoubleDatePickerModule), data: {
                    title: 'Démonstration du composant double date picker',
                    breadcrumb: 'double date picker'
                }
            },
            {
                path: 'dragdrop', loadChildren: () => import('@showcase/dragdrop/src/lib/dragdrop.module').then(m => m.DragdropModule), data: {
                    title: 'Démonstration de la directive tooltip',
                    breadcrumb: 'File-upload'
                }
            },
            {
                path: 'form', loadChildren: () => import('@showcase/form/src/lib/form.module').then(m => m.FormModule), data: {
                    title: 'Démonstration du composant form',
                    breadcrumb: 'form'
                }
            },
            {
                path: 'icon', loadChildren: () => import('@showcase/icon/src/lib/icon.module').then(m => m.IconModule), data: {
                    title: 'Démonstration du composant icons',
                    breadcrumb: 'icons'
                }
            },
            {
                path: 'input', loadChildren: () => import('@showcase/input/src/lib/input.module').then(m => m.InputModule), data: {
                    title: 'Démonstration du composant input',
                    breadcrumb: 'input'
                }
            },
            {
                path: 'interval', loadChildren: () => import('@showcase/interval/src/lib/interval.module').then(m => m.IntervalModule), data: {
                    title: 'Démonstration du composant interval',
                    breadcrumb: 'interval'
                }
            },
            {
                path: 'modal', loadChildren: () => import('@showcase/modal/src/lib/modal.module').then(m => m.ModalModule), data: {
                    title: 'Démonstration du composant modal',
                    breadcrumb: 'modal'
                }
            },
            {
                path: 'monoselect', loadChildren: () => import('@showcase/monoselect/src/lib/monoselect.module').then(m => m.MonoselectModule), data: {
                    title: 'Démonstration du composant mono select',
                    breadcrumb: 'monoselect'
                }
            },
            {
                path: 'multiselect', loadChildren: () => import('@showcase/multiselect/src/lib/multiselect.module').then(m => m.MultiselectModule), data: {
                    title: 'Démonstration du composant multi select',
                    breadcrumb: 'multiselect'
                }
            },
            {
                path: 'mvn-navbar', loadChildren: () => import('@showcase/mvn-navbar/src/lib/mvn-navbar.module').then(m => m.MvnNavbarModule), data: {
                    title: 'Démonstration du composant Navbar MVN',
                    breadcrumb: 'mvn-navbar'
                }
            },
            {
                path: 'navbar', loadChildren: () => import('@showcase/navbar/src/lib/navbar.module').then(m => m.NavbarModule), data: {
                    title: 'Démonstration du composant navbar',
                    breadcrumb: 'navbar'
                }
            },
            {
                path: 'sidebar', loadChildren: () => import('@showcase/sidebar/src/lib/sidebar.module').then(m => m.SidebarModule), data: {
                    title: 'Démonstration du composant sidebar',
                    breadcrumb: 'sidebar'
                }
            },
            {
                path: 'spinner', loadChildren: () => import('@showcase/spinner/src/lib/spinner.module').then(m => m.SpinnerModule), data: {
                    title: 'Démonstration du composant icons',
                    breadcrumb: 'spinner'
                }
            },
            {
                path: 'statusbar', loadChildren: () => import('@showcase/statusbar/src/lib/statusbar.module').then(m => m.StatusbarModule), data: {
                    title: 'Démonstration du composant Barre de status',
                    breadcrumb: 'statusbar'
                }
            },
            {
                path: 'stepper', loadChildren: () => import('@showcase/stepper/src/lib/stepper.module').then(m => m.StepperModule), data: {
                    title: 'Démonstration du composant Stepper',
                    breadcrumb: 'stepper'
                }
            },
            {
                path: 'table', loadChildren: () => import('@showcase/table/src/lib/table.module').then(m => m.TableModule), data: {
                    title: 'Démonstration du composant table',
                    breadcrumb: 'table'
                }
            },
            {
                path: 'tabs', loadChildren: () => import('@showcase/tabs/src/lib/tabs.module').then(m => m.TabsModule), data: {
                    title: 'Démonstration du composant Tabs',
                    breadcrumb: 'tabs'
                }
            },
            {
                path: 'textarea', loadChildren: () => import('@showcase/textarea/src/lib/textarea.module').then(m => m.TextareaModule), data: {
                    title: 'Démonstration du composant table',
                    breadcrumb: 'textarea'
                }
            },
            {
                path: 'toast', loadChildren: () => import('@showcase/toast/src/lib/toast.module').then(m => m.ToastModule), data: {
                    title: 'Démonstration du composant toast',
                    breadcrumb: 'toast'
                }
            },
            {
                path: 'tooltip', loadChildren: () => import('@showcase/tooltip/src/lib/tooltip.module').then(m => m.TooltipModule), data: {
                    title: 'Démonstration de la directive tooltip',
                    breadcrumb: 'tooltip'
                }
            },
            {
                path: 'tree', loadChildren: () => import('@showcase/tree/src/lib/tree.module').then(m => m.TreeModule), data: {
                    title: 'Démonstration du composant tree',
                    breadcrumb: 'tree'
                }
            },
            {
                path: 'typography', loadChildren: () => import('@showcase/typography/src/lib/typography.module').then(m => m.TypographyModule), data: {
                    title: 'Démonstration du composant typography',
                    breadcrumb: 'typography'
                }
            },
            {
                path: 'upload', loadChildren: () => import('@showcase/upload/src/lib/upload.module').then(m => m.UploadModule), data: {
                    title: 'Démonstration du composant upload',
                    breadcrumb: 'upload'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class RoutingModule { }