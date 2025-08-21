import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewVehicleDetailsRoutingModule } from './view-vehicle-details.routing-module';
import { ViewVehicleDetails } from './view-vehicle-details';

@NgModule({
  declarations: [ViewVehicleDetails],
  imports: [CommonModule, ViewVehicleDetailsRoutingModule],
})
export class VehicleDetailsModule {}
