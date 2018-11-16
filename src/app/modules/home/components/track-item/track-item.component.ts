import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {

  @Input() name:string;
  @Input() duration:string;
  constructor() { }

  ngOnInit() {
  }

}
