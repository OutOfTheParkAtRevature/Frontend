import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GamesService } from './games.service';
import { Game } from '../_models/Game';
import { Team } from '../_models/Team';

describe('GamesServiceService', () => {
  let service: GamesService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GamesService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#games', () => {
    let dummyGames: Game[];

    beforeEach(() => {
      dummyGames = [
        {
          id: 1, gameDate: new Date(),
          homeTeam: null, homeTeamId: 0, homeScore: 0,
          awayTeam: null, awayTeamId: 0, awayScore: 0,
          winner: null, winningTeam: 0,
          statistic1: '', statistic2: '', statistic3: ''
        },
        {
          id: 2, gameDate: new Date(),
          homeTeam: null, homeTeamId: 0, homeScore: 0,
          awayTeam: null, awayTeamId: 0, awayScore: 0,
          winner: null, winningTeam: 0,
          statistic1: '', statistic2: '', statistic3: ''
        }
      ] as Game[];
    });

    it('should call getGames()', () => {
      service.getGames().subscribe(games =>
        expect(games.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'games');
      expect(req.request.method).toBe('GET');
      req.flush(dummyGames);
    });

    it('should call getGame()', () => {
      service.getGame(1).subscribe(game =>
        expect(game).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'games/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyGames[0]);
    });

    it('should call createGame()', () => {
      service.createGame(dummyGames[0]).subscribe(game =>
        expect(game).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'games');
      expect(req.request.method).toBe('POST');
      req.flush(dummyGames[0]);
    });

    it('should call editGame()', () => {
      service.editGame(dummyGames[1], dummyGames[1].id).subscribe(game =>
        expect(game).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'games/2');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyGames[1]);
    });
  });

  describe('#teams', () => {
    let dummyTeams: Team[];

    beforeEach(() => {
      dummyTeams = [
        {
          id: 1,
          name: '',
          wins: 0,
          losses: 0,
          winningPct: ''
        },
        {
          id: 2,
          name: '',
          wins: 0,
          losses: 0,
          winningPct: ''
        }
      ] as Team[];
    });

    it('should call getTeams()', () => {
      service.getTeams().subscribe(teams =>
        expect(teams.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTeams);
    });

    it('should call getTeam()', () => {
      service.getTeam(1).subscribe(team =>
        expect(team).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTeams[0]);
    });

    it('should call updateTeam()', () => {
      service.updateTeam(dummyTeams[1], dummyTeams[1].id).subscribe(team =>
        expect(team).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams/2');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyTeams[1]);
    });
  });
});
