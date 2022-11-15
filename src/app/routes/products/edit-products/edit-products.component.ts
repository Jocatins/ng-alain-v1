import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';

import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ProductsService } from 'src/app/shared/services/products.service';

// Parent component
@Component({
    selector: 'app-edit-products',
    templateUrl: './edit-products.component.html'
})
export class EditProductsComponent implements OnInit {
    @Input() product?: IProduct;

    constructor(
        private router: Router,
        private fb: UntypedFormBuilder,
        private route: ActivatedRoute,
        private productService: ProductsService
    ) {
        const state: any = router.getCurrentNavigation()?.extras.state;
        if (state?.data) {
            console.log('edit', state);
            this.product = state.data;
        }
    }

    public productsForm!: UntypedFormGroup;

    ngOnInit(): void {
        this.productsForm = this.fb.group({
            category: [this.product?.category, [Validators.required]],
            description: [this.product?.description, [Validators.required]],
            price: [this.product?.price, [Validators.required]],
            rating: [this.product?.rating?.rate, [Validators.required]]
        });

        console.log(this.route.queryParams);
    }
    goBack(): void {
        this.router.navigateByUrl('products/log');
    }
    getGreetings(): string {
        return 'hello';
    }
    onSubmit(data: IProduct) {
        console.log(this.productsForm.value);
        this.productService.updateData(data);
        alert('Submitted Successfully');
        this.goBack();
    }
}
