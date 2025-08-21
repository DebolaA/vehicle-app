import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./pages/vehicle-list/vehicle-list-module').then((mod) => mod.VehicleListModule),
  },
  {
    path: 'vehicle-details/:id',
    loadChildren: () =>
      import('./pages/view-vehicle-details/view-vehicle-details.module').then(
        (mod) => mod.VehicleDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'vehicles',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
