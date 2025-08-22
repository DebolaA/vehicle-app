import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewVehicleDetailsRoutingModule } from './view-vehicle-details.routing-module';
import { ViewVehicleDetails } from './view-vehicle-details';
import { SharedModule } from '../../shared-module';

@NgModule({
  declarations: [ViewVehicleDetails],
  imports: [CommonModule, ViewVehicleDetailsRoutingModule, SharedModule],
})
export class VehicleDetailsModule {}
