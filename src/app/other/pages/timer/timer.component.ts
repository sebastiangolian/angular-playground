import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';
import { TimerService } from 'src/app/shared/services/timer.service';

@Component({
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timer$: Observable<number> = new Observable();

  constructor(private headerService: HeaderService, private timerService: TimerService) {
    this.headerService.set('Timer');
  }

  ngOnInit(): void {}

  onClick(): void {
    this.timer$ = this.timerService.subjectTimer$;
    this.timerService.start();
  }

  onStop(): void {
    this.timerService.stop();
  }

  onReset(): void {
    this.timerService.reset();
  }

  onInvert(): void {
    this.timerService.toggleInvert();
  }

  onSet(): void {
    this.timerService.setTimer(1000);
  }
}
