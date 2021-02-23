import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EquipmentRequestDetailsComponent } from './equipment-request-details.component';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';

describe('EquipmentRequestDetailsComponent', () => {
  let component: EquipmentRequestDetailsComponent;
  let fixture: ComponentFixture<EquipmentRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        EquipmentService,
        AccountService,
        UserService
      ],
      declarations: [EquipmentRequestDetailsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
