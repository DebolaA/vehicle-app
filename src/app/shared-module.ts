import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDropdownComponent } from './components/sort-dropdown/sort-dropdown';
import { VehicleListRoutingModule } from './pages/vehicle-list/vehicle-list-routing-module';
import { sortByPipe } from './pipe/sort.pipe';
import { OrderByDirective } from './directive/orderBy.directive';
import { SearchComponent } from './components/search/search.component';
import { VehicleCard } from './components/vehicle-card/vehicle-card';

@NgModule({
  declarations: [SortDropdownComponent, SearchComponent, VehicleCard],
  imports: [CommonModule, VehicleListRoutingModule, sortByPipe, OrderByDirective],
  exports: [
    SortDropdownComponent,
    SearchComponent,
    VehicleCard,
    VehicleListRoutingModule,
    sortByPipe,
    OrderByDirective,
  ],
})
export class SharedModule {}
