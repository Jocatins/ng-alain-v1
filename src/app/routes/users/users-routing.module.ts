import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserAddUserFormComponent } from './add-user/add-user-form/add-user-form.component';
import { UsersLogComponent } from './log/log.component';

const routes: Routes = [
  { path: 'log', component: UsersLogComponent },
  { path: 'add-user-form', component: AddUserAddUserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
