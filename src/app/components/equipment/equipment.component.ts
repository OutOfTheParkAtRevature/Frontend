import { Component, OnInit } from '@angular/core';
import { Equipment } from '../../_models/Equipment';
import { EquipmentRequest } from '../../_models/EquipmentRequest';
import { AccountService } from '../../_services/account.service';
import { EquipmentService } from '../../_services/equipment.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  //equipmentList: any;
  equipmentList: Array<EquipmentRequest> = new Array<EquipmentRequest>();

  constructor(private equipmentService: EquipmentService, public accountService: AccountService, public userService: UserService) { }

  ngOnInit(): void {
    this.getEquipment();
  }

  getEquipment() {
    this.equipmentService.getRequests().subscribe(response => {
      this.equipmentList = response;
      this.getTeam();
      this.getUser();
      this.getItem();
      console.log(this.equipmentList);
    }, err => {
      console.log(err)
    })
    
  }

  getTeam() {
    this.equipmentList.forEach(element => {
      this.equipmentService.getTeam(element.teamId).subscribe( response => {
        element.team = response;
      }, err => {
        console.log(err);
      })
    })
  }

  getUser() {
    this.equipmentList.forEach(element => {
      this.equipmentService.getUser(element.userId).subscribe( response => {
        element.user = response;
      }, err => {
        console.log(err);
      })
    })
  }

  getItem() {
    this.equipmentList.forEach(element => {
      this.equipmentService.getItem(element.itemId).subscribe( response => {
        element.item = response;
      }, err => {
        console.log(err);
      })
    })
  }
}
