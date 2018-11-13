import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-preview',
  templateUrl: './mix-preview.component.html',
  styleUrls: ['./mix-preview.component.scss']
})
export class MixPreviewComponent implements OnInit {

  @Input() title:string;
  @Input() data:any;

  constructor() {}

  ngOnInit() {
    console.log(this.data)
  }

}
