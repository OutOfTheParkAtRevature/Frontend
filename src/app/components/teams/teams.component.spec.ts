<<<<<<< HEAD
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HttpClientTestingModule],
=======
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
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
<<<<<<< HEAD

  it('should call calculatePCT()', () => {
    component.teams = [{}];
    component.teams[0].wins = 4;
    component.teams[0].losses = 3;
    component.teams[0].winningPct = null;
    component.calculatePCT();
  });
=======
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
});
