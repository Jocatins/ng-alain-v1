import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserAddUserFormComponent } from './add-user-form/add-user-form.component';

const routes: Routes = [

  { path: 'add-user-form', component: AddUserAddUserFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
