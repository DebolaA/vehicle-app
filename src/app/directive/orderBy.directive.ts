import { vehicleSortOptions } from './../model/VehicleModel';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { ISelectOption } from '../model/VehicleModel';
import { BehaviorSubject } from 'rxjs';
import { SortDropdownComponent } from '../components/sort-dropdown/sort-dropdown';

@Directive({
  selector: '[orderBy]',
})
export class OrderByDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private dropdownComponent: SortDropdownComponent
  ) {}

  @Input()
  optionList: ISelectOption[] = [];

  ngOnInit() {}

  @HostListener('click') mouseover() {
    let option: number = this.el.nativeElement.selectedIndex;
    if (option === 0) return;
    this.dropdownComponent.selectedOption$.next(option);
  }
}
