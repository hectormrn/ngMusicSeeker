import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading:boolean;
  private subscription: Subscription;
  title = 'ngMusicSeeker';

  constructor(private loadingService:LoadingService){
    this.subscription = this.loadingService.loading$.subscribe(loading => {
      setTimeout(()=>{
        this.loading = loading;
      }, 0)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
