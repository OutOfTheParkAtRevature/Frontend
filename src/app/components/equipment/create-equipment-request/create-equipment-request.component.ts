import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { EquipmentService } from '../../../_services/equipment.service';
import { Equipment } from '../../../_models/Equipment';
import { EquipmentRequest } from '../../../_models/EquipmentRequest';

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
      this.model.id = user.id;
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
        this.model.itemId = this.itemList[i].id;
      }
    }
  }

}
