import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScheduler]'
})
export class SchedulerDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor: string = ' transparent';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'red'
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }
}
