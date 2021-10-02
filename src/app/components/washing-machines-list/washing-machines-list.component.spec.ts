import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMachinesListComponent } from './washing-machines-list.component';

describe('WashingMachinesListComponent', () => {
  let component: WashingMachinesListComponent;
  let fixture: ComponentFixture<WashingMachinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingMachinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingMachinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
