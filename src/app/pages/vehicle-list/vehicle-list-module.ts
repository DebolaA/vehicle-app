import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleList } from './vehicle-list';
import { SharedModule } from '../../shared-module';

@NgModule({
  declarations: [VehicleList],
  imports: [CommonModule, SharedModule],
})
export class VehicleListModule {}
