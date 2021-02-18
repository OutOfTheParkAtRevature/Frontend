import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueNewsComponent } from './league-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LeagueNewsComponent', () => {
  let component: LeagueNewsComponent;
  let fixture: ComponentFixture<LeagueNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ LeagueNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
