import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent
    ],
    providers: [],
})
export class LayoutModule { }