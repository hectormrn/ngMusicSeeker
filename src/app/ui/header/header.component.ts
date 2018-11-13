import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private client: ClientService) { }

  ngOnInit() {
    console.log("< ngOnInit in HeaderComponent >")
  }

  exit() {
    this.client.exit()
  }

}
