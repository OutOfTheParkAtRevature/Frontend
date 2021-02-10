import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHomeTeams()', () => {
    component.games = [{}];
    component.games[0].homeTeamID = 5;
    component.games[0].awayTeamID = 3;
    component.games[0].winningTeam = 5;
    component.getHomeTeams();
  });

  it('should call getAwayTeams()', () => {
    component.games = [{}];
    component.games[0].homeTeamID = 5;
    component.games[0].awayTeamID = 3;
    component.games[0].winningTeam = 5;
    component.getAwayTeams();
  });

  it('should call getWinningTeams()', () => {
    component.games = [{}];
    component.games[0].homeTeamID = 5;
    component.games[0].awayTeamID = 3;
    component.games[0].winningTeam = 5;
    component.getWinningTeams();
  });

  it('should call setTimes()', () => {
    component.games = [{}];
    component.games[0].test = null;
    component.games[0].gameDate = Date.now;
    component.setTimes();
  });
});
