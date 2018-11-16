import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { SharedModule } from "../../shared";
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DirectivesModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
