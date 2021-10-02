import { Component, OnInit } from '@angular/core';
import { WashingMachinesListService } from "./washing-machines-list.service";
import { WashingMachineInterface } from "../washing-mashine-details/washing-machine.interface";

@Component({
  selector: 'app-washing-machines-list',
  templateUrl: './washing-machines-list.component.html',
  styleUrls: ['./washing-machines-list.component.scss']
})
export class WashingMachinesListComponent implements OnInit {
  public washingMachinesList: WashingMachineInterface[] = [];

  constructor(private washingMachinesListService: WashingMachinesListService) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.washingMachinesListService.getList().subscribe((response) => {
      this.washingMachinesList = response;
    });
  }

}
