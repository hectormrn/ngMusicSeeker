import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/services/client.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  data:any;

  constructor(
    private route:ActivatedRoute, 
    private api:ClientService
    ) {}

  ngOnInit() {
    let type = this.route.snapshot.paramMap.get('type');
    let keyword = this.route.snapshot.paramMap.get('keyword');
    this.api.searchMixed(keyword, 15, type).then( resp => {
      console.info(`Data for ${keyword} of type: ${type}`, resp)
      this.data = resp[0]
    })
  }

}
