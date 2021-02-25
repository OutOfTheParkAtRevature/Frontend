import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { EquipmentService } from '../../../_services/equipment.service';
import { EquipmentRequest } from '../../../_models/EquipmentRequest';
import { UserService } from '../../../_services/user.service';

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
              public accountService: AccountService,
              public userService: UserService) { }

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
      this.editedEquipmentRequest = res;

      // getting more information about the request
      this.getTeam();
      this.getUser();
      this.getItem();

      this.titleService.setTitle(`Edit Request - #${this.equipmentRequest.id}`)
      //this.editedEquipmentRequest = {
      //  status: this.equipmentRequest.status
      //};
      this.editedEquipmentRequest.status = res.status;
    }, err => {
      console.log(err);
    })
  }

  getTeam() {
    this.equipmentService.getTeam(this.equipmentRequest.teamID).subscribe( response => {
      this.equipmentRequest.team = response;
    }, err => {
      console.log(err);
    })
  }

  getUser() {
    this.equipmentService.getUser(this.equipmentRequest.userID).subscribe( res => {
      this.equipmentRequest.user = res;
    }, err => {
      console.log(err);
    })
  }

  editRequest() : void
  {
    console.log(this.editedEquipmentRequest);
    this.equipmentService.editRequest(this.equipmentRequestId, this.editedEquipmentRequest).subscribe(res =>{
        console.log(res);
        this.router.navigate([`/equipment/details/${this.equipmentRequestId}`])
    })
  }

  getItem() {
    this.equipmentService.getItem(this.equipmentRequest.itemID).subscribe( response => {
      this.equipmentRequest.item = response;
    }, err => {
      console.log(err);
    })
};

}
