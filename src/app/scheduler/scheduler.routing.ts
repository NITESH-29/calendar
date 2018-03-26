import { SchedulerComponent } from './scheduler.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

export const schedulerRoutes: Routes = [
    {
        path: '',
        component: SchedulerComponent,
        data: {
            pageTitle: 'Quotes'
        }
    }
];

export const schedulerRouting: ModuleWithProviders = RouterModule.forChild(schedulerRoutes);

