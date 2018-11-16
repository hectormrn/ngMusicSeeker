import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  private profile:any;
  public loaded:boolean;
  constructor(private api:ClientService) {
    this.loaded = false;
  }

  ngOnInit() {
    this.api.getMe().then(resp => {
      this.profile = resp;
      this.loaded = true;
      console.log(this.profile)
  })
  }

}
