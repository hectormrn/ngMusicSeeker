import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';
import { GridComponent } from './modules/grid/grid/grid.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'grid/:type/:keyword', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
