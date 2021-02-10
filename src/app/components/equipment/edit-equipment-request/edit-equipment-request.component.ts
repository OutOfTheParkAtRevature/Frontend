import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { EquipmentRequest } from 'src/app/_models/EquipmentRequest';

@Component({
  selector: 'app-edit-equipment-request',
  templateUrl: './edit-equipment-request.component.html',
  styleUrls: ['./edit-equipment-request.component.css']
})
export class EditEquipmentRequestComponent implements OnInit {

  constructor(private equipmentService: EquipmentService,
              private route: ActivatedRoute,
              private titleService: Title,
              private router: Router,
              public accountService: AccountService) { }

  equipmentRequestId: string;
  //equipmentRequest: any = {}
  //editedEquipmentRequest: any = {}
  equipmentRequest: EquipmentRequest;
  editedEquipmentRequest: EquipmentRequest;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipmentRequestId = params.id;
    });

    this.getRequest(this.equipmentRequestId);

  }

  getRequest(id) {
    this.equipmentService.getRequest(id).subscribe(res => {
      this.equipmentRequest = res;

      // getting more information about the request
      this.getTeam();
      this.getUser();
      this.getItem();

      this.titleService.setTitle(`Edit Request - #${this.equipmentRequest.requestId}`)
      //this.editedEquipmentRequest = {
      //  status: this.equipmentRequest.status
      //};
      this.editedEquipmentRequest.status = this.equipmentRequest.status;
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

  editRequest() {
    console.log(this.editedEquipmentRequest)
    this.equipmentService.editRequest(this.equipmentRequestId, this.editedEquipmentRequest).subscribe(res =>{
      console.log(res);
      this.router.navigate([`/equipment/details/${this.equipmentRequestId}`])
    })
  }

  getItem() {
    this.equipmentService.getItem(this.equipmentRequest.itemId).subscribe( response => {
      this.equipmentRequest.item = response;
    }, err => {
      console.log(err);
    })
};

}
