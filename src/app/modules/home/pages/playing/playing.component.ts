import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html'
})
export class PlayingComponent implements OnInit {

  public playing:any;
  private idcounter:any;
  constructor(private api:ClientService) { 
    this.playing = {}
  }

  ngOnInit() {
    this.getNowPlayingData();
    this.updateNowPlaying();
  }

  //duplicated function, refactor, move to single exported file...
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

  getNowPlayingData = () => {
    this.api.getNowPlaying().then(resp => {
        this.playing = resp;
    })
  }

  updateNowPlaying = () => {
    this.idcounter = setInterval(()=>{
        this.getNowPlayingData();
    }, 15000)
  }

}
