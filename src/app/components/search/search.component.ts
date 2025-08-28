import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false,
})
export class SearchComponent {
  @Output()
  searchEvt = new EventEmitter<string>();

  search$: Observable<Event> | null = null;
  @ViewChild('search', { static: true }) searchInput!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement as HTMLInputElement, 'keyup')
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((event: Event) => {
        const query = (event.target as HTMLInputElement).value;
        this.searchEvt.emit(query);
        return of(event);
      });
  }

  clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.searchEvt.emit('');
  }
}
