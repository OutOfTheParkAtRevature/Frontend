import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [AuthenticationComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call OnChangingSection()', () => {
    component.boolLogIn = true;
    component.boolRegister = false;
    component.onChangingSection();
    expect(component.boolLogIn).toBeFalse();
    expect(component.boolRegister).toBeTrue();
  });

  it('should call RegisteringUser() and LogIngUser()', () => {
    component.LogIngUser(new Event('look',
      { 'bubbles': true, 'cancelable': false }
    ));
    component.RegisteringUser(new Event('look',
      { 'bubbles': true, 'cancelable': false }
    ));
  });
});
