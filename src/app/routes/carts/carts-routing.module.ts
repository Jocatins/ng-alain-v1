import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCartsComponent } from './edit-carts/edit-carts.component';
import { CartsLogComponent } from './log/log.component';

const routes: Routes = [
    { path: 'log', component: CartsLogComponent },
    { path: 'edit-carts', component: EditCartsComponent, data: {} }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartsRoutingModule {}
