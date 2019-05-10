import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './game.service';
import { GameModel } from '../models/game';

describe('GameService', () => {
  var gameService: GameService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GameService
    ],
    imports: [
      HttpClientModule,
    ]
  }));

  beforeEach(inject([GameService],
    (service: GameService) => {
      gameService = service;
  }));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it('should allow adding games', () => {
    expect(gameService.getGames().length).toEqual(3);
    let stock = new GameModel(4,'NEW',100);
    expect(gameService.createGame(stock)).toBeTruthy();
    expect(gameService.getGames().length).toEqual(4);
    expect(gameService.getGames()[3].title).toEqual('NEW')
  });

  it('should fetch a list of games', () => {
    expect(gameService.getGames().length).toEqual(3);
    expect(gameService.getGames()[0].title).toEqual('FIFA');
    expect(gameService.getGames()[1].title).toEqual('PES');
    expect(gameService.getGames()[2].title).toEqual('WOT');
  });
});
