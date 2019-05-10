import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { GameApiComponent } from '../components/game-api/game-api.component';
import { Observable } from 'rxjs';

@Injectable()
export class GameApiDeactivateGuard implements CanDeactivate<GameApiComponent> {
  canDeactivate(component: GameApiComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Do you want to navigate away from this page?');
  }
}
