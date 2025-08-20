import { NgModule } from '@angular/core';
import { VehicleList } from './vehicle-list';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VehicleList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleListRoutingModule {}
