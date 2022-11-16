import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CartsRoutingModule } from './carts-routing.module';
import { CartsService } from '../../shared/services/carts.service';
import { CartsLogComponent } from './log/log.component';
import { EditCartsComponent } from './edit-carts/edit-carts.component';

const COMPONENTS: Type<void>[] = [CartsLogComponent, EditCartsComponent];

@NgModule({
    imports: [SharedModule, CartsRoutingModule],
    declarations: COMPONENTS,
    providers: [CartsService]
})
export class CartsModule {}
