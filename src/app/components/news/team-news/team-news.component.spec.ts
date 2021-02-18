import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNewsComponent } from './team-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeamNewsComponent', () => {
  let component: TeamNewsComponent;
  let fixture: ComponentFixture<TeamNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TeamNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
