import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildrenRoutes } from './category-routing-module';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule , RouterModule.forChild(ChildrenRoutes),
  ],
  exports: [RouterModule]
})
export class CategoryModule { }
