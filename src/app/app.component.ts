import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading:boolean;
  title = 'ngMusicSeeker';

  constructor(private sloading:LoadingService){
    this.sloading.loading$.subscribe(loading => {
      console.log("loading? ", loading);      
      this.loading = loading;
    });
  }

  ngOnInit() {
    //this.sloading.updateLoading(true);
  }

  ngOnDestroy() {
    console.log("destruyendo el home-component");
    
  }

}
