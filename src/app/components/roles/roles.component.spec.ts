import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesComponent } from './roles.component';

<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';

=======
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
describe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HttpClientTestingModule],
=======
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
      declarations: [ RolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
