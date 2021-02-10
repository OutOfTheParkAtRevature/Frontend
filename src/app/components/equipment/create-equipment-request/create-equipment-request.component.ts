import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { Equipment } from 'src/app/_models/Equipment';
import { EquipmentRequest } from 'src/app/_models/EquipmentRequest';

@Component({
  selector: 'app-create-equipment-request',
  templateUrl: './create-equipment-request.component.html',
  styleUrls: ['./create-equipment-request.component.css']
})
export class CreateEquipmentRequestComponent implements OnInit {

  //itemList: any;
  //model: any = {};
  itemList: Array<Equipment> = new Array<Equipment>();
  model: EquipmentRequest;

  constructor(private equipmentService: EquipmentService, public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getItemList();
  }

  createEquipmentRequest() {
    this.getCurrentUser();
    this.getCreatedItem();
    this.model.status = 'App. Pending';
    this.equipmentService.createRequest(this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(['/equipment'])
    }, err => {
      console.log(err);
    })
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe( user => {
      this.model.teamId = user.teamID;
      this.model.userId = user.userID;
    })
  }

  getItemList() {
    this.equipmentService.getItems().subscribe( items => {
      this.itemList = items;
    }, err => {
      console.log(err);
    })
  }

  getCreatedItem() {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].description == this.model.item.description) {
        this.model.itemId = this.itemList[i].equipmentId;
      }
    }
  }

}
