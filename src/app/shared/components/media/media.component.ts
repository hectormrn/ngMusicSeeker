import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  @Input() insideGrid:boolean;
  @Input() data:any;

  constructor() { }

  ngOnInit() {
    console.log("insideGrid: ", this.insideGrid)
  }

  setStyles = () => {
    let s = { "padding-left" : "5px" }
    return this.insideGrid ? Object.assign({}, s, {'text-align': 'center'}): s;
  }

  getImgMediaClass = (type) => {
    let clssName = "ml-3";
    switch (type) {
        case 'artist':
           clssName += " rounded-circle";
           break;
    }
    return clssName;
  }

  getMediaThumbnail = (data) => {
      let img = "";
      switch (data.type) {
          case 'track':
              img = data.album.images[1].url;
              break;
          case 'artist':
          case 'playlist':
          case 'album':
            img = data.images.length > 0 ? data.images[1] ? data.images[1].url
                      : data.images[0] ? data.images[0].url : "../../images/404.svg": "../../images/404.svg";
      }
      return img;
  }

}
