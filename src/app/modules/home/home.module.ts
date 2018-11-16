import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { MixPreviewComponent } from "./components/mix-preview/mix-preview.component";
import { SearchComponent } from "./components/search/search.component";
import { SharedModule } from '../../shared/index';
import { ProfileComponent } from "./pages/profile/profile.component";
import { PlayingComponent } from './pages/playing/playing.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MediaSummaryComponent } from './components/media-summary/media-summary.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackItemComponent } from './components/track-item/track-item.component';

@NgModule({
    declarations: [
        HomeComponent,
        MixPreviewComponent,
        SearchComponent,
        ProfileComponent,
        PlayingComponent,
        DetailComponent,
        MediaSummaryComponent,
        TrackListComponent,
        TrackItemComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [],
    providers: []
})
export class HomeModule {}