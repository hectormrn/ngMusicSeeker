import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();
  keyword:string = "";
  
  doSearch(value:string) {
    this.keyword = value;
    this.search.emit(value)
  }

}
