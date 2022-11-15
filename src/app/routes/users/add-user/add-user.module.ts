import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserAddUserFormComponent } from './add-user-form/add-user-form.component';

const COMPONENTS: Type<void>[] = [AddUserAddUserFormComponent];

@NgModule({
  imports: [SharedModule, AddUserRoutingModule],
  declarations: COMPONENTS
})
export class AddUserModule {}
