import { Component } from '@angular/core';
import { ClientService } from "../services/client.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private api: ClientService) { }
  keyword = null;
  mixed:any = []

  onSearch(keyword: string) {
    this.keyword = keyword
    this.searchMixAll()
  }
  
  searchMixAll() {
    if (this.keyword.length == 0) {
      this.mixed = [];
      return;
    }
    this.api.searchMixed(this.keyword, 4)
    .then( (data) => {
      console.log("Mixed data: ", data); 
      this.mixed = data
    });
  }

}
