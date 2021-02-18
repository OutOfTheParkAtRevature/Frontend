import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GamesServiceService', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getGame(id)', () => {
    service.getGame(4);
  });

  it('should call createGame()', () => {
    let game: any = {};
    service.createGame(game);
  });

  it('should call editGame(game, id)', () => {
    let game: any = {};
    service.editGame(game, 3);
  });

  it('should call getTeams()', () => {
    let game: any = {};
    service.getTeams();
  });

  it('should call updateTeam(team, id)', () => {
    let team: any = {};
    service.updateTeam(team, 3);
  });

});
