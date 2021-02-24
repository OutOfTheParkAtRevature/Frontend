import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeamsComponent } from './teams.component';
import { GamesService } from '../../_services/games.service';
import { AccountService } from '../../_services/account.service';
import { Team } from '../../_models/Team';
import { of } from 'rxjs';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let mockGameService;
  let mockTeams;

  let teams = [
    {
      id: 1,
      name: '',
      wins: 54,
      losses: 193,
      winningPct: ''
    },
    {
      id: 2,
      name: '',
      wins: 143,
      losses: 1111,
      winningPct: ''
    }
  ] as Team[];

  beforeEach(async () => {
    mockGameService = jasmine.createSpyObj('GameService', ['getTeams']);
    mockTeams = mockGameService.getTeams.and.returnValue(of(teams));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GamesService, useValue: mockGameService },
        AccountService
      ],
      declarations: [TeamsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and call methods', () => {
    expect(mockTeams.calls.any()).toBeTrue();
    expect(component).toBeTruthy();
    component.teams.forEach(t => {
      expect(t.winningPct.length).toBeGreaterThan(0);
    });
  });
});
