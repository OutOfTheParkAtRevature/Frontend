import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipmentRequestComponent } from './create-equipment-request.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { EquipmentService } from 'src/app/_services/equipment.service';

describe('CreateEquipmentRequestComponent', () => {
  let component: CreateEquipmentRequestComponent;
  let fixture: ComponentFixture<CreateEquipmentRequestComponent>;
  let mockCreateRequest;
  let equipmentServiceMock;
 // let accountServiceMock;
  let mockGetItems;
  let mockGetRequests;
  let model: any = {
      itemId: "3", item: "football", status: "Requested"
  };

  beforeEach(async () => {
    //accountServiceMock = jasmine.createSpyObj('AccountService', []);
    equipmentServiceMock = jasmine.createSpyObj('EquipmentService', ['createRequest', 'getItems', 'getRequests']);
    mockCreateRequest = equipmentServiceMock.createRequest.and.returnValue(of(model));
    mockGetItems = equipmentServiceMock.getItems.and.returnValue(of());
    mockGetRequests = equipmentServiceMock.getRequests.and.returnValue(of());
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ CreateEquipmentRequestComponent ],
      providers: [
        { provide: EquipmentService, useValue: equipmentServiceMock }, /*{ provide: AccountService, useValue: equipmentServiceMock },*/ 
        HttpClientTestingModule, RouterTestingModule
      ]
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

  it('should create an equipment request', () => {
    component.model.user = "Chris";
    component.model.item = "baseball";
    component.model.status = "pending";

    expect(component.model.user).toBe("Chris");
    component.itemList = [];
    //component.createEquipmentRequest();
    //expect(component.model.user).toBe("travis");
  });

  it('should call getCurrentUser()', () => {
    component.getCurrentUser();
  });

  it('should call getCreatedItem()', () => {
    component.model.item = "football";
    component.itemList = [{}];
    component.itemList[0].description = "football";
    component.itemList[0].equipmentId = "3"
    component.getCreatedItem();
    //expect(component.model.itemId).toBe("3");
  });
});
