import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { UnSub } from '../../utils/un-sub';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false,
})
export class SearchComponent extends UnSub {
  @Output()
  searchEvt = new EventEmitter<string>();

  search$: Observable<Event> | null = null;
  @ViewChild('search', { static: true }) searchInput!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement as HTMLInputElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((event: Event) => {
          const query = (event.target as HTMLInputElement).value;
          this.searchEvt.emit(query);
          console.log(query);
          return of(event);
        })
      )
      .subscribe((data) => {});
  }

  clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.searchEvt.emit('');
  }
}
