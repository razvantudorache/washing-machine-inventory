import { Component, OnInit } from '@angular/core';
import { WashingMachinesListService } from "./washing-machines-list.service";
import { WashingMachineInterface } from "../washing-mashine-details/washing-machine.interface";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: 'app-washing-machines-list',
  templateUrl: './washing-machines-list.component.html',
  styleUrls: ['./washing-machines-list.component.scss']
})
export class WashingMachinesListComponent implements OnInit {
  public washingMachinesList: WashingMachineInterface[] = [];

  constructor(private washingMachinesListService: WashingMachinesListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.washingMachinesListService.getList().subscribe((response) => {
      this.washingMachinesList = response;
    });
  }

  public editMachine(machineId: string) {
    this.router.navigate(["washing-machine-details", machineId], {
      relativeTo: this.route.parent
    });
  }

  public deleteMachine(machineId: string) {
    this.washingMachinesListService.deleteWashingMachine(machineId).subscribe((response) => {
      _.remove(this.washingMachinesList, (item) => {
        return item.id === machineId;
      });
    });
  }
}
