import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { MixPreviewComponent } from "./components/mix-preview/mix-preview.component";
import { SearchComponent } from "./components/search/search.component";
import { SharedModule } from '../../shared/index';
import { ProfileComponent } from "./pages/profile/profile.component";

@NgModule({
    declarations: [
        HomeComponent,
        MixPreviewComponent,
        SearchComponent,
        ProfileComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [],
    providers: []
})
export class HomeModule {}