import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentRequestComponent } from './edit-equipment-request.component';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('EditEquipmentRequestComponent', () => {
  let component: EditEquipmentRequestComponent;
  let fixture: ComponentFixture<EditEquipmentRequestComponent>;
  // let mockGetRequest;
  // let mockGetTeam;
  // let equipmentServiceMock;
  // let mockGetItems;
  // let equipmentRequestId: number = 9;
  // let equipmentRequest: any = {
  //   requestId: 4, teamId: 3
  // };

  beforeEach(async () => {
    // equipmentServiceMock = jasmine.createSpyObj('EquipmentService', ['getRequest', 'getTeam', 'getUser', 'getItem']);
    // mockGetRequest = equipmentServiceMock.getRequest.and.returnValue(of(equipmentRequest.requestId));
    // mockGetTeam = equipmentServiceMock.getTeam.and.returnValue(of(equipmentRequest.teamId));
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ EditEquipmentRequestComponent ],
      //providers: [{ provide: EquipmentService, useValue: equipmentServiceMock }, RouterTestingModule, HttpClientTestingModule]
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

  it('should call getTeam()', () => {
    component.getTeam();
  });

  it('should call getUser()', () => {
    component.getUser();
  });

  it('should call getItem)', () => {
    component.getItem();
  });

  it('should call editRequest()', () => {
    component.editRequest();
  });
});
