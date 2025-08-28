import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOption } from '../../model/VehicleModel';

@Component({
  selector: 'app-sort-dropdown',
  standalone: false,
  templateUrl: './sort-dropdown.html',
  styleUrl: './sort-dropdown.scss',
})
export class SortDropdownComponent {
  @Input()
  optionList!: ISelectOption[];

  ngOnInit(): void {}

  @Output()
  valueChangeEvent = new EventEmitter<ISelectOption>();

  notifyValueChange(option: any): void {
    this.valueChangeEvent.emit(option);
  }
}
