import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ProductsLogComponent } from './log/log.component';
// import { IProduct } from './IProduct';

const routes: Routes = [
    { path: 'log', component: ProductsLogComponent },
    { path: 'edit', component: EditProductsComponent, data: {} }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
