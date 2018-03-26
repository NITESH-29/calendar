import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { schedulerRouting } from './scheduler.routing';
import { CalendarModule } from 'angular-calendar'
import { SchedulerComponent } from 'app/scheduler/scheduler.component';
import { SchedulerDirective } from './scheduler.directive';
import { SchedulerService } from 'app/scheduler/scheduler.service';

@NgModule({
    imports: [
        CommonModule,
        SmartadminModule,
        schedulerRouting,
        CalendarModule.forRoot()
    ],
    declarations: [
        SchedulerComponent,
        SchedulerDirective
    ],
    providers: [
        SchedulerService
    ]
})
export class SchedulerModule { }
