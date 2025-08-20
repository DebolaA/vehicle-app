import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full',
  },
  // {
  //   path: 'vehicles',
  //   loadChildren: () =>
  //     import('./pages/vehicle-list/vehicle-list-module').then((mod) => mod.VehicleListModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
