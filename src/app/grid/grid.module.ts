import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { UiModule } from '../ui/ui.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DirectivesModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
