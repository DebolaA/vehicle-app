import { HostListener, Pipe, PipeTransform } from '@angular/core';
import { Sort } from '../model/VehicleModel';

@Pipe({
  name: 'sortBy',
})
export class sortByPipe implements PipeTransform {
  transform(array: any[] | null, field: string, type: Sort): any[] {
    if (!array) return [];
    return array.sort((a: any, b: any) => {
      if (type) {
        return a[field] < b[field] ? -1 : 1;
      } else {
        return b[field] < a[field] ? -1 : 1;
      }
    });
  }
}
