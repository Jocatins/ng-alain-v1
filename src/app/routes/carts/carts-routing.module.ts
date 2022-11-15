import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsLogComponent } from './log/log.component';

const routes: Routes = [

  { path: 'log', component: CartsLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
