import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlayingComponent } from './pages/playing/playing.component';
import { DetailComponent } from "./pages/detail/detail.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'playing', component: PlayingComponent},
    { path: 'detail', component: DetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }