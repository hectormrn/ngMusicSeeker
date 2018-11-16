import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-preview',
  templateUrl: './mix-preview.component.html',
  styleUrls: ['./mix-preview.component.scss']
})
export class MixPreviewComponent implements OnInit {

  @Input() title:string;
  @Input() data:any;
  @Input() keyword:string;
  mixType:string;

  constructor() {}

  ngOnInit() {
    console.log("Mix preview data: ",this.data)
    this.mixType = this.data.length > 0 ? this.data[0].type ? this.data[0].type: "": ""
  }

}
