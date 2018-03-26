import { SchedulerService } from './scheduler.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  view: string = 'day';
  viewDate: Date = new Date(2017, 12, 3);
  events: CalendarEvent[];

  constructor(private schedulerService: SchedulerService) { }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-info"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    }
  ];

  handleEvent(action: string, event: CalendarEvent): void {
    alert('Event Clicked');
  }

  ngOnInit() {
    this.schedulerService.getAppoinments().subscribe(data => {
      this.events = data;
    })
  }
}
