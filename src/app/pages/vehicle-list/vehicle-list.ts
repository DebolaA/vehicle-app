import { Component } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';
import { BehaviorSubject, of } from 'rxjs';
import {
  IQueryPayload,
  ISelectOption,
  IVehicle,
  Sort,
  vehicleSortOptions,
} from '../../model/VehicleModel';
import { Router } from '@angular/router';
import { sortByPipe } from '../../pipe/sort.pipe';

@Component({
  selector: 'app-vehicle-list',
  standalone: false,
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.scss',
})
export class VehicleList {
  errorMessageSubject$ = new BehaviorSubject<string>('');

  vehicleList$ = new BehaviorSubject<IVehicle[] | null>([]);

  isLoading$ = new BehaviorSubject<boolean>(false);

  payload: IQueryPayload = {
    limit: 10,
    make: '',
    orderBy: 'make',
    page: 1,
    sort: Sort.asc,
    offset: 0,
  };

  sortOptionList: ISelectOption[] = vehicleSortOptions;

  constructor(private endpointService: EndpointService, private router: Router) {}

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.isLoading$.next(true);

    this.endpointService.getAllVehicles(this.payload).subscribe({
      next: (data: IVehicle[] | null) => {
        this.vehicleList$.next(data);
        this.isLoading$.next(false);
      },
      error: (err) => {
        this.errorMessageSubject$.next(err);
        this.isLoading$.next(false);
        return of([]);
      },
    });
  }

  performSearch(searchString: string): void {
    this.payload.make = searchString;
    this.endpointService.getVehicleByMake(this.payload.make).subscribe({
      next: (data: IVehicle[] | null) => {
        this.vehicleList$.next(data);
        this.isLoading$.next(false);
      },
      error: (err) => {
        this.errorMessageSubject$.next(err);
        this.isLoading$.next(false);
        return of([]);
      },
    });
  }

  sortSearch(value: ISelectOption): void {
    this.payload.orderBy = value.id.split(':')[0];
    this.payload.sort = value.id.split(':')[1] === 'asc' ? Sort.asc : Sort.desc;
    let pipe = new sortByPipe();
    pipe.transform(this.vehicleList$.getValue(), this.payload.orderBy, this.payload.sort);
  }

  viewVehicleDetails(vehicle: IVehicle): void {
    this.router.navigate(['/vehicle-details', vehicle.id]);
  }

  loadMoreBtn(): void {
    this.payload.offset = this.payload.page * 10;
    this.payload.page += 1;
    this.getAllVehicles();
  }
}
