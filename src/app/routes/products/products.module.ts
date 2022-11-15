import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from '../../shared/services/products.service';
import { ProductsLogComponent } from './log/log.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

const COMPONENTS: Type<void>[] = [ProductsLogComponent, EditProductsComponent];

@NgModule({
    imports: [SharedModule, ProductsRoutingModule],
    declarations: COMPONENTS,
    providers: [ProductsService]
})
export class ProductsModule {}
