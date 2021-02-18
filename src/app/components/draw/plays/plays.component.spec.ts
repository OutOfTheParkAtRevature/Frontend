import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaysComponent } from './plays.component';
import { DrawService } from 'src/app/_services/draw.service';
import { GamesService } from 'src/app/_services/games.service';
import { AccountService } from 'src/app/_services/account.service';

describe('PlaysComponent', () => {
  let component: PlaysComponent;
  let fixture: ComponentFixture<PlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        DrawService,
        GamesService,
        AccountService
      ],
      declarations: [PlaysComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
