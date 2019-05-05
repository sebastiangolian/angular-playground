import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/services/game.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/shared/services/message.service';
import { GameModel } from '../../models/game';

@Component({
  selector: 'app-game-simple',
  templateUrl: './game-simple.component.html',
  styleUrls: ['./game-simple.component.css']
})
export class GameSimpleComponent implements OnInit {

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
