import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../interfaces/game.interface';
import { GameModel } from '../../models/game';
import { MessageService } from 'src/app/shared/services/message.service';
import { NgForm } from '@angular/forms';
import { GameApiService } from '../../services/game-api.service';

@Component({
  selector: 'app-game-api',
  templateUrl: './game-api.component.html',
  styleUrls: ['./game-api.component.css']
})
export class GameApiComponent implements OnInit {

  public games$: Observable<Game[]>;
  public model: GameModel = new GameModel();

  constructor(private gameService: GameApiService, public messageService: MessageService) { }

  ngOnInit() {
    this.games$ = this.gameService.get();
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.gameService
        .create(this.model)
        .subscribe((result: any) => {
          this.messageService.message = result.msg;
          this.model = new GameModel();
          f.reset();
          this.games$ = this.gameService.get();
        }, (err) => {
          this.messageService.message = err.msg;
        });
    } else {
      console.error('Game form is in an invalid state');
    }
  }
}
