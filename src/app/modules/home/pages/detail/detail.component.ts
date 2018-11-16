import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private data:any;
  private sub:Subscription;

  constructor(
    private api:ClientService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.sub = this.route
        .queryParams
        .subscribe(params => {
          this.getDetailByParams(params)
        });
  }

  getDetailByParams(params) {
    this.api.getSingleById(params.type, params.id).then( resp => {
      console.log("Data: ", resp);       
      this.data = resp;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
