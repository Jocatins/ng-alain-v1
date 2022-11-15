import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from '../../shared/services/users.service';
import { UsersLogComponent } from './log/log.component';

import { AddUserModule } from './add-user/add-user.module';

const COMPONENTS: Type<void>[] = [UsersLogComponent];

@NgModule({
    imports: [SharedModule, UsersRoutingModule, AddUserModule],
    declarations: COMPONENTS,
    providers: [UsersService]
})
export class UsersModule {}
