import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/shared/models/game';
import { GameService } from 'src/app/shared/services/game.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public games: GameModel[];
  public model: GameModel = new GameModel();

  constructor(private gameService: GameService, public messageService: MessageService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  onSubmit(f:NgForm) {
    this.gameService.createGame(this.model);
    this.messageService.message = "Added new game."
  }
}
