import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IVehicle } from '../../model/VehicleModel';

@Component({
  selector: 'app-vehicle-card',
  standalone: false,
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.scss',
})
export class VehicleCard {
  @Input()
  vehicle!: IVehicle;

  @Output()
  viewEvt = new EventEmitter<IVehicle>();

  viewVehicleDetails() {
    this.viewEvt.emit(this.vehicle);
  }
}
