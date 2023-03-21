import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { STColumn, STComponent } from '@delon/abc/st';
import { IProduct } from 'src/app/shared/models/IProduct';

import { ProductsService } from '../../../shared/services/products.service';

// Child component
@Component({
    selector: 'app-products-log',
    templateUrl: './log.component.html'
})
export class ProductsLogComponent implements OnInit {
    @ViewChild('st') private readonly st!: STComponent;

    // eslint-disable-next-line @angular-eslint/prefer-output-readonly
    @Output() newEvent = new EventEmitter<string>();

    public products: IProduct[] = [];
    public isVisible = false;
    public productForm!: UntypedFormGroup;

    constructor(
        private productsService: ProductsService,
        private loadingSrv: LoadingService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: UntypedFormBuilder
    ) {}

    ngOnInit(): void {
        this.show('spin');
        this.getAllProducts();
        this.productForm = this.fb.group({
            category: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            rating: ['', Validators.required]
        });
    }
    addItem(value: any) {
        this.newEvent.emit(value);
    }
    columns: STColumn[] = [
        { title: 'Category', index: 'category' },
        { title: 'Description', index: 'description' },
        { title: 'Price', type: 'number', index: 'price' },
        { title: 'Image', type: 'img', width: '50px', index: 'image' },
        { title: 'Rating', type: 'number', index: 'rating.rate' },
        {
            title: 'Actions',
            buttons: [
                {
                    text: 'Edit',
                    click: (item: IProduct) => {
                        const { id, description, category, price, rating } = item;
                        let ratingValue = item.rating?.rate;
                        let ratingCount = item.rating?.count;

                        const data: NavigationExtras = { state: { data: { id, description, category, price, rating } } };
                        this.router.navigate(['/products/edit'], data);
                    }
                },
                {
                    icon: 'delete',
                    type: 'static',
                    pop: {
                        title: 'Are you sure?',
                        okType: 'danger',
                        icon: 'star'
                    },
                    click: (item: any) => {
                        //    console.log(item);
                        this.productsService.deleteData(item.id).subscribe(res => {
                            console.log(res);
                            this.getAllProducts();
                        });
                    }
                }
            ]
        }
    ];

    show(type: LoadingType): void {
        this.loadingSrv.open({ type });
        setTimeout(() => this.loadingSrv.close(), 1000);
    }

    public submitData() {
        if (this.productForm.valid) {
            this.productsService.postData(this.productForm.value).subscribe({
                next: res => {
                    alert('Product added successfully');
                    this.productForm.reset();
                    this.handleCancel();
                    this.getAllProducts();
                },
                error: () => {
                    alert('Error while adding product');
                }
            });
        }
    }

    // ================CRUD functions ========================>
    getAllProducts(): void {
        this.productsService.getData().subscribe(data => {
            console.log('products', data);
            this.products = data;
        });
    }
    postProducts(body: IProduct): void {
        this.productsService.postData(body).subscribe(response => {
            console.log(response, 'Posted succesfully');
        });
    }
    updateProducts(body: IProduct): void {
        this.productsService.updateData(body).subscribe(response => {
            console.log(response);
        });
    }
    deleteProduct(id: number) {
        this.productsService.deleteData(id).subscribe(response => {
            console.log(response);
        });
    }
    // =============CRUD functions ========================>
    // ==============Modal Functions ======================>
    public showModal(): void {
        this.isVisible = true;
    }
    handleOk(): void {
        console.log(this.productForm.value);
        this.isVisible = false;
    }

    handleCancel(): void {
        //     console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
