import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IVehicle } from '../model/VehicleModel';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(private http: HttpClient) {}

  getAllVehicles(): Observable<IVehicle[]> {
    return of([]);
  }

  getVehicles(id: string): Observable<IVehicle> {
    return of({} as IVehicle);
  }
}
