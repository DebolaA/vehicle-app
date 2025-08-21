import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleList } from './vehicle-list';
import { VehicleListRoutingModule } from './vehicle-list-routing-module';
import { SearchComponent } from '../../components/search/search.component';
import { VehicleCard } from '../../components/vehicle-card/vehicle-card';
import { sortByPipe } from '../../pipe/sort.pipe';
import { OrderByDirective } from '../../directive/orderBy.directive';
import { SortDropdownComponent } from '../../components/sort-dropdown/sort-dropdown';

@NgModule({
  declarations: [VehicleList, SearchComponent, VehicleCard, SortDropdownComponent],
  imports: [CommonModule, VehicleListRoutingModule, sortByPipe, OrderByDirective],
})
export class VehicleListModule {}
