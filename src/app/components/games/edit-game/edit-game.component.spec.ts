import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditGameComponent } from './edit-game.component';
import { GamesService } from 'src/app/_services/games.service';
import { AccountService } from 'src/app/_services/account.service';

describe('EditGameComponent', () => {
  let component: EditGameComponent;
  let fixture: ComponentFixture<EditGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        GamesService,
        AccountService
      ],
      declarations: [EditGameComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
