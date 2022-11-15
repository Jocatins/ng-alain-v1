import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CartsRoutingModule } from './carts-routing.module';
import { CartsService } from './carts.service';
import { CartsLogComponent } from './log/log.component';

const COMPONENTS: Type<void>[] = [
  CartsLogComponent];

@NgModule({
  imports: [
    SharedModule,
    CartsRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    CartsService
  ],
})
export class CartsModule { }
