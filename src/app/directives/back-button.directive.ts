import { Directive, ElementRef, HostListener } from '@angular/core';
import { Location } from "@angular/common";

@Directive({
  selector: '[backButton]'
})
export class BackButtonDirective {
    constructor(private location:Location) {}
    @HostListener('click')
    onclick(){
      this.location.back()
    }
}