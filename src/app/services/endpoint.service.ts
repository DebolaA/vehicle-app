import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, isEmpty, map, Observable, of, tap, throwError } from 'rxjs';
import { IQueryPayload, IVehicle } from '../model/VehicleModel';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  baseUrl: string = 'http://localhost:3004/';
  constructor(private http: HttpClient) {}

  getAllVehicles(payload?: IQueryPayload | undefined): Observable<IVehicle[] | null> {
    let params = new HttpParams();

    return this.http.get<IVehicle[]>(`${this.baseUrl}vehicles`, { params: params }).pipe(
      map((response: IVehicle[]) => {
        if (response && response.length) {
          return response;
        } else return null;
      }),
      catchError(this.handleError)
    );
  }

  getVehicleByMake(search: string): Observable<IVehicle[] | null> {
    return this.http.get<IVehicle[]>(`${this.baseUrl}vehicles?make=${search}`).pipe(
      map((response: IVehicle[]) => {
        if (response && response.length) {
          return response;
        } else return null;
      }),
      catchError(this.handleError)
    );
  }

  getVehicle(id: string): Observable<IVehicle | null> {
    return this.http
      .get<IVehicle>(`${this.baseUrl}vehicles/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: Error) {
    return throwError(() => {
      return `${error.message}`;
    });
  }
}
