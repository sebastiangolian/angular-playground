import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimerService implements OnDestroy {
  public subjectTimer$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private subscription: Subscription = new Subscription();
  private timer = 0;
  private interval = 1000;
  private isStopped = true;
  private isInvert = false;

  constructor() {
    this.initTimer();
  }

  public toggleInvert(): void {
    this.isInvert = !this.isInvert;
    this.subjectTimer$.next(this.timer);
  }

  public setTimer(value: number): void {
    this.timer = value;
    this.subjectTimer$.next(this.timer);
  }

  public initTimer(): void {
    this.subscription.add(this.timerSubscription());
  }

  public start(): void {
    this.isStopped = false;
  }

  public stop(): void {
    this.isStopped = true;
  }

  public reset(): void {
    this.timer = 0;
    this.subjectTimer$.next(this.timer);
  }

  public killTimer(): void {
    this.timer = 0;
    this.subjectTimer$.next(this.timer);
    this.subscription.unsubscribe();
  }

  public ngOnDestroy(): void {
    this.killTimer();
  }

  private timerSubscription(): Subscription {
    return timer(0, this.interval).subscribe((tick) => {
      if (!this.isStopped) {
        if (!this.isInvert) {
          this.timer += 1;
        } else {
          this.timer -= 1;
        }

        this.subjectTimer$.next(this.timer);
      }
    });
  }
}
