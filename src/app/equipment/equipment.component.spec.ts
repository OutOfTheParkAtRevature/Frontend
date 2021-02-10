import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentComponent } from './equipment.component';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EquipmentService } from '../_services/equipment.service';
import { of } from 'rxjs';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;
  let mockGetEquipment;
  let equipmentServiceMock;
  //let mockGetItems;
  let equipmentList: any = {
    equipmentId: 1, itemId: 3, teamId: 4, userId: 2
  };

  beforeEach(async () => {
    equipmentServiceMock = jasmine.createSpyObj('EquipmentService', ['getRequests', 'getItem', 'getTeam', 'getItem']);
    mockGetEquipment = equipmentServiceMock.getRequests.and.returnValue(of([]));
    //mockGetItems = equipmentServiceMock.getItems.and.returnValue(of());
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ EquipmentComponent ],
      providers: [{ provide: EquipmentService, useValue: equipmentServiceMock }, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get equipment', () => {
    component.equipmentList = [{}];
    component.equipmentList[0].equipmentId = 1;
    component.equipmentList[0].itemId = 2;
    component.equipmentList[0].teamId = 3;
    component.equipmentList[0].userId = 4;
    mockGetEquipment = equipmentServiceMock.getRequests.and.returnValue(equipmentList);
    //let equipmentUrl = equipmentServiceMock.getRequests();
    spyOn(component, "getEquipment");
    component.getEquipment();
    expect(component.getEquipment).toHaveBeenCalled();
  });

  it('should get equipment', () => {
    component.equipmentList = [{}];
    let team = component.equipmentList[0].teamId = 3;
    mockGetEquipment = equipmentServiceMock.getTeam.and.returnValue(team);
    //let equipmentUrl = equipmentServiceMock.getRequests();
    spyOn(component, "getTeam");
    component.getTeam();
    expect(component.getTeam).toHaveBeenCalled();
  });

});
