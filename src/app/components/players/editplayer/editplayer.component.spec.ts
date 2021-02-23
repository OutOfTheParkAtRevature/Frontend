import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditplayerComponent } from './editplayer.component';
import { UserService } from 'src/app/_services/user.service';
import { AccountService } from 'src/app/_services/account.service';

describe('EditplayerComponent', () => {
  let component: EditplayerComponent;
  let fixture: ComponentFixture<EditplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        AccountService,
        UserService
      ],
      declarations: [EditplayerComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
