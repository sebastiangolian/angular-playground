import { Component } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { NgForm } from '@angular/forms';
import { GameObservableService } from 'src/app/game/services/game-observable.service.';
import { Observable } from 'rxjs';
import { GameModel } from '../../models/game';

@Component({
  selector: 'app-game-observable',
  templateUrl: './game-observable.component.html',
  styleUrls: ['./game-observable.component.css']
})
export class GameObservableComponent {

  public games$: Observable<GameModel[]>;
  public model: GameModel = new GameModel();

  constructor(private gameService: GameObservableService, public messageService: MessageService) { }

  ngOnInit() {
    this.games$ = this.gameService.getGames();
  }

  onSubmit(f:NgForm) {
    if (f.valid) {
      this.gameService.createGame(this.model)
          .subscribe((result: any) => {
            this.messageService.message = result.msg;
            this.model =  new GameModel();
            f.reset();
          }, (err) => {
            this.messageService.message = err.msg;
          });
    } else {
      console.error('Game form is in an invalid state');
    }
  }
}
