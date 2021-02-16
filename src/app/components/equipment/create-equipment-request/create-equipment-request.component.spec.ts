import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateEquipmentRequestComponent } from './create-equipment-request.component';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { AccountService } from 'src/app/_services/account.service';

describe('CreateEquipmentRequestComponent', () => {
  let component: CreateEquipmentRequestComponent;
  let fixture: ComponentFixture<CreateEquipmentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        EquipmentService,
        AccountService
      ],
      declarations: [CreateEquipmentRequestComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
