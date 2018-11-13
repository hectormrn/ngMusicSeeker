import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  @Input() insideGrid:boolean;
  @Input() data:any;
  urlThumbnail:string;

  constructor() { }

  ngOnInit() {
    this.getMediaThumbnail();
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

  getMediaDescription = () => {
    switch(this.data.type){
        case 'album':
            return this.data.artists[0].name
        case 'playlist':
            return `Total tracks ${this.data.tracks.total}`
        case 'track':
            return this.data.artists[0].name
    }
  }

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
      this.urlThumbnail = img;
  }

}
