import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from '../../interfaces/game.interface';
import { GameModel } from '../../models/game';
import { MessageService } from 'src/app/shared/services/message.service';
import { NgForm } from '@angular/forms';
import { GameApiService } from '../../services/game-api.service';
import { startWith, debounceTime, distinctUntilChanged, switchMap, share } from 'rxjs/operators';

@Component({
  selector: 'app-game-api',
  templateUrl: './game-api.component.html',
  styleUrls: ['./game-api.component.css']
})
export class GameApiComponent implements OnInit {

  public games$: Observable<Game[]>;
  public model: GameModel = new GameModel();
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(private gameService: GameApiService, public messageService: MessageService) { }

  ngOnInit() {
    this.games$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.gameService.get(this.searchString)),
      share()
    );
  }

  onSearch() {
    this.searchTerms.next(this.searchString);
  }

  onClickUpdate(gameId: number) {
    this.gameService
      .getOne(gameId)
      .subscribe((game: Game) => {
        this.model = game;
        this.messageService.message = 'Game with id ' + this.model.id + ' is currently update';
      })
  }

  onDelete(gameId: number) {
    this.gameService
      .delete(gameId)
      .subscribe((game: any) => {
        this.messageService.message = 'Game with id ' + gameId + ' is deleted';
        this.games$ = this.gameService.get(this.searchString);
      })
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (this.model.id == null) {
        this.create(f);
      } else {
        this.update(f);
      }
    } else {
      this.messageService.message = 'Error in form state.';
    }
  }

  onReset(f: NgForm) {
    this.reset(f);
    this.messageService.message = 'Form reset';
  }

  private reset(f: NgForm) {
    f.reset();
    this.model = new GameModel();
    this.games$ = this.gameService.get(this.searchString);
  }

  private create(f: NgForm) {
    this.gameService
      .create(this.model)
      .subscribe((result: any) => {
        this.messageService.message = result.msg;
        this.model = new GameModel();
        this.reset(f);
      }, (err) => {
        this.messageService.message = err.msg;
      });
  }

  private update(f: NgForm) {
    this.gameService
      .update(this.model)
      .subscribe((result: any) => {
        this.messageService.message = result.msg;
        this.model = new GameModel();
        this.reset(f);
      }, (err) => {
        this.messageService.message = err.msg;
      });
  }
}
