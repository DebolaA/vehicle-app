import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleList } from './vehicle-list';
import { VehicleListRoutingModule } from './vehicle-list-routing-module';

@NgModule({
  declarations: [VehicleList],
  imports: [CommonModule, VehicleListRoutingModule],
})
export class VehicleListModule {}
