import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MediaComponent } from './shared/media/media.component';
import { FavbuttonComponent } from './shared/favbutton/favbutton.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    MediaComponent, 
    FavbuttonComponent
  ],
  exports: [
    LayoutComponent, 
    MediaComponent, 
    FavbuttonComponent
  ]
})
export class UiModule { }
