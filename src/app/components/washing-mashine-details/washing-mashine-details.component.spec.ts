import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMashineDetailsComponent } from './washing-mashine-details.component';

describe('WashingMashineDetailsComponent', () => {
  let component: WashingMashineDetailsComponent;
  let fixture: ComponentFixture<WashingMashineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingMashineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingMashineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
