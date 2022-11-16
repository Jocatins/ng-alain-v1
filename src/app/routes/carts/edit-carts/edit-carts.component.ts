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
    @Input() product?: ICarts;

    constructor(private router: Router, private fb: UntypedFormBuilder, private route: ActivatedRoute, private cartsService: CartsService) {
        const state: any = router.getCurrentNavigation()?.extras.state;
        if (state?.data) {
            console.log('edit', state);
            this.product = state.data;
        }
    }

    public productsForm!: UntypedFormGroup;

    ngOnInit(): void {
        console.log(this.route.queryParams);
    }
    goBack(): void {
        this.router.navigateByUrl('products/log');
    }
    getGreetings(): string {
        return 'hello';
    }
    onSubmit(data: ICarts) {
        console.log(this.productsForm.value);
        this.cartsService.updateData(data);
        alert('Submitted Successfully');
        this.goBack();
    }
}
