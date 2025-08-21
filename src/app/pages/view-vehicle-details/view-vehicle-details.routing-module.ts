import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVehicleDetails } from './view-vehicle-details';

const routes: Routes = [
  {
    path: '',
    component: ViewVehicleDetails,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVehicleDetailsRoutingModule {}
