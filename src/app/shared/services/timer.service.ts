import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimerService implements OnDestroy {
  public subjectTimer$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private subscription: Subscription = new Subscription();
  private timer: number = 0
  private interval: number = 1000
  private isStoped: boolean = true
  private isInvert: boolean = false

  constructor() {
    this.initTimer()
  }

  public toogleInvert(): void {
    this.isInvert = !this.isInvert;
    this.subjectTimer$.next(this.timer)
  }

  public setTimer(timer: number): void {
    this.timer = timer;
    this.subjectTimer$.next(this.timer)
  }

  public initTimer(): void {
    this.subscription.add(this.timerSubscription())
  }

  public start(): void {
    this.isStoped = false
  }

  public stop(): void {
    this.isStoped = true
  }

  public reset(): void {
    this.timer = 0
    this.subjectTimer$.next(this.timer)
  }

  public killTimer(): void {
    this.timer = 0
    this.subjectTimer$.next(this.timer)
    this.subscription.unsubscribe();
  }

  private timerSubscription(): Subscription {
    return timer(0, this.interval).subscribe(tick => {
      if (!this.isStoped) {

        if (!this.isInvert) {
          this.timer += 1
        } else {
          this.timer -= 1
        }

        this.subjectTimer$.next(this.timer)
      }
    })
  }

  public ngOnDestroy(): void {
    this.killTimer();
  }
}
