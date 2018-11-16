import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavbuttonComponent } from "./favbutton/favbutton.component";
import { LayoutModule } from './layout/layout.module';
import { MediaComponent } from "./media/media.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
    declarations: [
        FavbuttonComponent,
        MediaComponent
    ],
    exports: [
        CommonModule,
        LayoutModule,
        FavbuttonComponent,
        MediaComponent
    ]
})
export class SharedModule { }