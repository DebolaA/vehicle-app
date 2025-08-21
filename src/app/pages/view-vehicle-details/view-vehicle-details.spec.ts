import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVehicleDetails } from './view-vehicle-details';

describe('ViewVehicleDetails', () => {
  let component: ViewVehicleDetails;
  let fixture: ComponentFixture<ViewVehicleDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVehicleDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVehicleDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
