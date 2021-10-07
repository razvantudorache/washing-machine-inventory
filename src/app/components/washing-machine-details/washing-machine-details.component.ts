import { Component, OnInit } from '@angular/core';
import { WashingMachineInterface } from "./washing-machine.interface";
import { WashingMachineDetailsService } from "./washing-machine-details.service";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-washing-machine-details',
  templateUrl: './washing-machine-details.component.html',
  styleUrls: ['./washing-machine-details.component.scss']
})
export class WashingMachineDetailsComponent implements OnInit {
  public details: WashingMachineInterface = {
    id: "",
    name: "",
    status: "",
    location: ""
  };

  public statusOptions = [];

  public locationOptions = [];

  constructor(private washingMachineDetailsService: WashingMachineDetailsService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDetails();

    this.getLocations();

    this.getStatuses();
  }

  private getDetails() {
    const id: string = this.route.snapshot.paramMap.get('id') || "";

    this.washingMachineDetailsService.getDetails(id).subscribe((response) => {
      this.details = response;
    });
  }

  public getLocations() {
    this.washingMachineDetailsService.getLocationOptions().subscribe((response) => {
      this.locationOptions = response;
    });
  }

  public getStatuses() {
    this.washingMachineDetailsService.getStatusOptions().subscribe((response) => {
      this.statusOptions = response;
    });
  }

  public save(id: string) {
    this.washingMachineDetailsService.saveDetails(id, this.details).subscribe((response) => {
      this.snackBar.open("Details successfully saved!");
    });
  }
}
