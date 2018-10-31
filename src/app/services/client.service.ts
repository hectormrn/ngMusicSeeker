import { Injectable } from '@angular/core';
import SpotifyWebApi from "spotify-web-api-js";
//import moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private api:any = null

  constructor() { 
    this.api = new SpotifyWebApi()
    this.setUp()
    console.log("--Cuantas veces me llaman? --")
  }

  setUp () {
    const token = this.getToken()
    token ? this.api.setAccessToken(token): console.error("--There's no api-token--")
  }

  getSPToken(){
    return this.api.getAccessToken()
  } 

  exit() {
      this.api.setAccessToken(null);
      localStorage.removeItem('sptoken')
      location.href = "http://localhost:4200";
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
    token = token ? token: this.getHashParams().access_token ? this.getHashParams().access_token: undefined;
    token ? localStorage.setItem('sptoken', token): localStorage.removeItem('sptoken'); 
    return token;
  }

  getInfo() {
    return this.api.getMe().then(resp => {
      return resp
    })
  }

}

