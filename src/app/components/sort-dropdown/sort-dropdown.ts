import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOption } from '../../model/VehicleModel';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sort-dropdown',
  standalone: false,
  templateUrl: './sort-dropdown.html',
  styleUrl: './sort-dropdown.scss',
})
export class SortDropdownComponent {
  @Input()
  optionList!: ISelectOption[];

  selectedOption$ = new BehaviorSubject<number>(0);

  @Output()
  valueChangeEvent = new EventEmitter<ISelectOption>();

  ngOnInit(): void {
    this.selectedOption$.pipe().subscribe((option: number) => {
      this.valueChangeEvent.emit(this.optionList[option]);
    });
  }
}
