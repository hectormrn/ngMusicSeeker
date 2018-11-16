import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-summary',
  templateUrl: './media-summary.component.html',
  styleUrls: ['./media-summary.component.scss']
})
export class MediaSummaryComponent implements OnInit {

  @Input() data:any; 
  constructor() {
    this.data = null
  }
  
  //duplicated function, refactor this, move to separeted file...
  getMediaThumbnail = () => {
    let img = "";
    switch (this.data.type) {
        case 'track':
            img = this.data.album.images[1].url;
            break;
        case 'artist':
        case 'playlist':
        case 'album':
           img = this.data.images.length > 0 ? this.data.images[1] ? this.data.images[1].url
                    : this.data.images[0] ? this.data.images[0].url : "../../images/404.svg": "../../images/404.svg";
    }
    return img;
  }

  ngOnInit() {
    console.log("SUMMARY-DATA: ", this.data)
  }

}
