import { Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ISelectOption, IVehicle, termOptionList } from '../../model/VehicleModel';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-view-vehicle-details',
  standalone: false,
  templateUrl: './view-vehicle-details.html',
  styleUrl: './view-vehicle-details.scss',
})
export class ViewVehicleDetails {
  messageSubject = new BehaviorSubject<string>('');
  messageAction$ = this.messageSubject.asObservable();
  error: boolean = false;
  paramSub: Subscription;
  vehicle: IVehicle | undefined;
  deposit: number = 0;
  credit: number = 0;
  monthlyPymt: number = 0;
  selectedTerm: number = 5;

  termOption: ISelectOption[] = termOptionList;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private endpointService: EndpointService
  ) {
    this.paramSub = this.route.params.subscribe((params: any) => {
      const id: string | undefined = params ? params['id'] : undefined;
      if (id) {
        this.endpointService.getVehicle(id).subscribe({
          next: (data: IVehicle | null) => {
            if (data) {
              this.vehicle = data;
              this.calculate(data);
            } else {
              this.messageSubject.next('No such vehicle exists');
            }
          },
          error: (error: Error) => {
            this.messageSubject.next('No such vehicle exists');
          },
        });
      }
    });
  }

  ngOnInit(): void {}

  navigateBack() {
    this.router.navigate(['/vehicles']);
  }

  termChangeEvt(evt: any): void {
    this.selectedTerm = evt.id;
    this.calculate(this.vehicle);
  }

  calculate(veh: IVehicle | undefined): void {
    if (veh) {
      this.deposit = veh.price ? veh.price * 0.1 : 0;
      this.credit = veh.price ? veh.price - this.deposit : 0;
      this.monthlyPymt = this.credit % this.selectedTerm;
    }
  }
}
