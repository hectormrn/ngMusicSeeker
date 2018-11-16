import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  private items:any;
  @Input() data:any;
  constructor() { 
    this.items = []
  }

  ngOnInit() {
    console.log("@Child data in Tracklist: ", this.data);
    
    switch(this.data.type) {
      case 'album':
        this.items = this.data.tracks.items;
        break;
      case 'artist':
        this.items = this.data.tracks.items;
        break;
      case 'playlist':
        this.data.playlist.tracks.items
    }
    console.log("ITEMS[] ", this.items)
  }

}
