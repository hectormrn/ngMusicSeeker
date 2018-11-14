import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';
import { SearchComponent } from './home/components/search/search.component';
import { MixPreviewComponent } from './home/components/mix-preview/mix-preview.component';
import { GridModule } from './grid/grid.module';
import { NgxLoadingModule } from 'ngx-loading';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    MixPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    GridModule,
    DirectivesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
