import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpExceptionHandlerService {
  msg:string = "An error has occurred"

  constructor() { }

  httpCode(_error, callback = undefined) {
    console.log("Erro en peticion: ", _error.response)
    let err = JSON.parse(_error.response);
    alert(`SpotifyErr - ${err.error.message || this.msg}`);
    switch (err.error.status) {
        case 401:
        typeof callback == "function" ? callback(): this.redirectToHome();
        break;
    }
  }

  redirectToHome() {
    location.href = "http://localhost:4200/login";
  }

}
