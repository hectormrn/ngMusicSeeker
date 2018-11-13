import { Injectable } from '@angular/core';
import SpotifyWebApi from "spotify-web-api-js";
import { HttpExceptionHandlerService } from './http-exception-handler.service'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private api:any = null

  constructor(private httpErrorHandler: HttpExceptionHandlerService) { 
    this.api = new SpotifyWebApi()
    this.setUp()
    console.log("--Cuantas veces me llaman? --")
  }

  setUp () {
    const token = this.getToken()
    token ? this.api.setAccessToken(token): console.error("--There's no api-token--")
  }

  getSPToken() {
    return this.api.getAccessToken()
  } 

  exit = () => {
      this.api.setAccessToken(null);
      localStorage.removeItem('sptoken')
      location.href = "http://localhost:4200/login";
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getToken() {
    let token = localStorage.getItem('sptoken'); 
    token = token ? token: this.getHashParams()['access_token'] ? this.getHashParams()['access_token']: undefined;
    token ? localStorage.setItem('sptoken', token): localStorage.removeItem('sptoken'); 
    return token;
  }

  getInfo() {
    return this.api.getMe().then(resp => {
      return resp
    }, err => {
      console.log(err);
    })
  }



  searchTracks(trackName, l = 10) { 
      return this.api.searchTracks(trackName, {limit: l})
      .then( (data) => {
          return data.tracks.items;
      }, (error) => {
          this.httpErrorHandler.httpCode(error, this.exit);
      })
  }

  getArtistTopTracks (id) {
      return this.api.getArtistTopTracks(id, 'MX')
      .then( (resp) => {
          return resp.tracks;
      }, error => {
          this.httpErrorHandler.httpCode(error, this.exit);
      })
  }

  searchArtists (artistName, l = 10) {
      return this.api.searchArtists(artistName, {limit: l})
      .then( (data) => {
          return data.artists.items;
      }, (error) => {})
  }

  getArtistById (id) {
      return this.api.getArtist(id)
      .then( (resp) => {
          return resp;
      }, error => {
          this.httpErrorHandler.httpCode(error, this.exit);
      })
  }

  searchAlbums (albumName, l = 10) {
      return this.api.searchAlbums(albumName, {limit: l})
      .then( (data) => {
          return data.albums.items;
      }, (error) => {})
  }

  getAlbumById (id) {
      return this.api.getAlbum(id)
      .then( (resp) => {
          return resp;
      }, error => {
          this.httpErrorHandler.httpCode(error, this.exit);
      })
  }

  searchPlaylists (playlistName, l = 10) {
      return this.api.searchPlaylists(playlistName, {limit: l})
      .then( (data) => {
          return data.playlists.items;
      }, (error) => {})
  }

  
  searchMixed (keyword, l = 10, type = null) {
    let proms = []
    let promiseMap = {
        track: this.searchTracks,
        artist: this.searchArtists,
        album: this.searchAlbums,
        playlist: this.searchPlaylists,
    };

    type ?
        promiseMap.hasOwnProperty(type) && proms.push( promiseMap[type].call(this, keyword, l) )
    :
        Object.keys(promiseMap).forEach(k => {
            proms.push(promiseMap[k].call(this, keyword, l))
        });
    ;
    
    return Promise.all(proms).then( resp => {
        return resp;
    }, error => {
        this.httpErrorHandler.httpCode(error, this.exit);
    })
  }

}

