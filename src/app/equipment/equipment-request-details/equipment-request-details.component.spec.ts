import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRequestDetailsComponent } from './equipment-request-details.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('EquipmentRequestDetailsComponent', () => {
  let component: EquipmentRequestDetailsComponent;
  let fixture: ComponentFixture<EquipmentRequestDetailsComponent>;
  let equipmentServiceMock;
  let mockGetTeam;

  beforeEach(async () => {
    equipmentServiceMock = jasmine.createSpyObj('EquipmentService', ['getRequest', 'getTeam', 'getUser', 'getItem']);
    mockGetTeam = equipmentServiceMock.getTeam.and.returnValue(of(2));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ EquipmentRequestDetailsComponent ],
      providers: [
       // { provide: EquipmentService, useValue: equipmentServiceMock }, 
        HttpClientTestingModule, RouterTestingModule
      ]
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

  it('should call getTeam()', () => {
    component.equipmentRequest = {
      teamId: 2, team: null
    }
    component.getTeam();
  });

  it('should call getUser()', () => {
    component.getUser();
  });

  it('should call getItem()', () => {
    component.getItem();
  });
});
