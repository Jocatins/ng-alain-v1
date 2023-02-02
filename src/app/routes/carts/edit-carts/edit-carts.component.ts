import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';

import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ICarts } from 'src/app/shared/models/ICarts';
import { CartsService } from 'src/app/shared/services/carts.service';

// Parent component
@Component({
    selector: 'app-edit-carts',
    templateUrl: './edit-carts.component.html'
})
export class EditCartsComponent implements OnInit {
    @Input() cartItem?: ICarts;

    constructor(private router: Router, private fb: UntypedFormBuilder, private route: ActivatedRoute, private cartsService: CartsService) {
        const state: any = router.getCurrentNavigation()?.extras.state;
        if (state?.data) {
            console.log('cart', state);
            this.cartItem = state.data;
        }
    }

    public cartsForm!: UntypedFormGroup;

    ngOnInit(): void {
        console.log(this.route.queryParams);
        this.cartsForm = this.fb.group({
            id: [this.cartItem?.id, [Validators.required]],
            userId: [this.cartItem?.userId, [Validators.required]],
            date: [this.cartItem?.date, [Validators.required]],
            products: [this.cartItem?.products, [Validators.required]]
        });
    }
    public goBack(): void {
        this.router.navigateByUrl('carts/log');
    }
    public onSubmit(data: ICarts) {
        console.log(this.cartsForm.value);
        this.cartsService.updateData(data);
        alert('Submitted Successfully');
        this.goBack();
    }
}
