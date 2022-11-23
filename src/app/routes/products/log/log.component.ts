import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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

    @Output() newEvent = new EventEmitter<string>();

    public products: IProduct[] = [];

    constructor(
        private productsService: ProductsService,
        private loadingSrv: LoadingService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.show('spin');
        this.getAllProducts();
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
            title: '',
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
                }
                // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
            ]
        }
    ];

    show(type: LoadingType): void {
        this.loadingSrv.open({ type });
        setTimeout(() => this.loadingSrv.close(), 1000);
    }

    submitData(value: IProduct) {
        let body = {
            price: value.price,
            title: value.category,
            description: value.description
        };
    }
    updateData(value: IProduct) {
        let body = {
            price: value.price,
            title: value.category,
            description: value.description
        };
    }
    // ================CRUD functions ========================>
    getAllProducts(): void {
        this.productsService.getData().subscribe(data => {
            // console.log(data);
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
}
