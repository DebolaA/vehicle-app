import { vehicleSortOptions } from './../model/VehicleModel';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';
import { ISelectOption } from '../model/VehicleModel';

@Directive({
  selector: '[orderBy]',
})
export class OrderByDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Output()
  emittedValue = new EventEmitter<ISelectOption>();

  sortOptionList: ISelectOption[] = vehicleSortOptions;

  ngOnInit() {}

  @HostListener('click') mouseover() {
    let option: number = this.el.nativeElement.selectedIndex;
    if (option === 0) return;
    this.emittedValue.emit(this.sortOptionList[option]);
  }
}
