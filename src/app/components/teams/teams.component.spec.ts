import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call calculatePCT()', () => {
    component.teams = [{}];
    component.teams[0].wins = 4;
    component.teams[0].losses = 3;
    component.teams[0].winningPct = null;
    component.calculatePCT();
  });
});
