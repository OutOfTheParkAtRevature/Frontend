import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from './create-game.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentRef } from '@angular/core';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ CreateGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // travis here
  // it('should call createGame()', () => {
  //   component.createGame();
  // });

  it('should getHomeTeam()', () => {
    component.teamList = [{}];
    component.newGame = [{}];
    component.teamList[0].name = "bears";
    component.teamList[0].teamID = 3;
    component.newGame[0].homeTeam = "bears";
    component.newGame[0].homeTeamID = null;
    component.getHomeTeam();
  });

  it('should getAwayTeam()', () => {
    component.teamList = [{}];
    component.newGame = [{}];
    component.teamList[0].name = "bears";
    component.teamList[0].teamID = 3;
    component.newGame[0].awayTeam = "bears";
    component.newGame[0].awayTeamID = null;
    component.getAwayTeam();
  });
});
