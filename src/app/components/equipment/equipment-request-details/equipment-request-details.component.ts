import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { EquipmentRequest } from 'src/app/_models/EquipmentRequest';

@Component({
  selector: 'app-equipment-request-details',
  templateUrl: './equipment-request-details.component.html',
  styleUrls: ['./equipment-request-details.component.css']
})
export class EquipmentRequestDetailsComponent implements OnInit {

  constructor(private equipmentService: EquipmentService, private route: ActivatedRoute, public accountService: AccountService) { }
  equipmentRequestId: string;
  //equipmentRequest: any = {};
  equipmentRequest: EquipmentRequest;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipmentRequestId = params.id;
    });

    this.getRequest(this.equipmentRequestId);
  }

  getRequest(id) {
    this.equipmentService.getRequest(id).subscribe(res => {
      this.equipmentRequest = res;
      this.getTeam();
      this.getUser();
      this.getItem()
    }, err => {
      console.log(err);
    })
  }

  getTeam() {
      this.equipmentService.getTeam(this.equipmentRequest.teamId).subscribe( response => {
        this.equipmentRequest.team = response;
      }, err => {
        console.log(err);
      })
  }

  getUser() {
    this.equipmentService.getUser(this.equipmentRequest.userId).subscribe( res => {
      this.equipmentRequest.user = res;
    }, err => {
      console.log(err);
    })
  }

  getItem() {
      this.equipmentService.getItem(this.equipmentRequest.itemId).subscribe( response => {
        this.equipmentRequest.item = response;
      }, err => {
        console.log(err);
      })
  }


}
