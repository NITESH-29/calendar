import { Legends } from './../core/constants/global.constants';
import { JsonApiService } from './../core/api/json-api.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class SchedulerService {
  public calendarEvents: CalendarEvent[] = [];
  public result: Subject<any>;

  constructor(private jsonApiService: JsonApiService) {
    this.result = new Subject();
  }

  getAppoinments(): Observable<CalendarEvent[]> {
    return this.jsonApiService.fetch('/scheduler/appointments.json')
      .map((result) => {
        result.Result.Appointments.forEach(appointment => {
          this.calendarEvents.push({
            start: new Date(appointment.AppointmentTime),
            title: appointment.QuoteNumber,
            color: Legends.Priority
          });
        });
        return this.calendarEvents;
      });
  }
}
