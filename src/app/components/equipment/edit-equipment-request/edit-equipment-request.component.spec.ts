import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditEquipmentRequestComponent } from './edit-equipment-request.component';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';

describe('EditEquipmentRequestComponent', () => {
  let component: EditEquipmentRequestComponent;
  let fixture: ComponentFixture<EditEquipmentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        EquipmentService,
        AccountService,
        UserService
      ],
      declarations: [EditEquipmentRequestComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
