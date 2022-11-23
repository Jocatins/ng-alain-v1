import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { CartsService } from './../../../shared/services/carts.service';
import { ICarts } from 'src/app/shared/models/ICarts';

@Component({
    selector: 'app-carts-log',
    templateUrl: './log.component.html',

    styleUrls: ['index.less']
})
export class CartsLogComponent implements OnInit {
    @ViewChild('st') private readonly st!: STComponent;

    public carts: ICarts[] = [];

    columns: STColumn[] = [
        { title: 'id', index: 'id' },
        { title: 'products', index: 'products' },
        { title: 'date', index: 'date' },
        { title: 'userId', index: 'userId' },
        {
            title: 'Actions',
            buttons: [
                {
                    text: 'Edit',
                    click: (item: ICarts) => {
                        const { id, products, date, userId } = item;
                        const data: NavigationExtras = { state: { data: { id, products, date, userId } } };
                        this.router.navigate(['/carts/edit-carts'], data);
                    }
                }
                // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
            ]
        }
    ];

    constructor(private loadingSrv: LoadingService, private cartsService: CartsService, private router: Router) {}

    ngOnInit(): void {
        this.show('spin');
        this.getAllCarts();
    }
    getAllCarts() {
        this.cartsService.getData().subscribe(data => {
            console.log(data);
            this.carts = data;
        });
    }
    show(type: LoadingType): void {
        this.loadingSrv.open({ type });
        setTimeout(() => this.loadingSrv.close(), 1000);
    }
    startEdit(id: string) {
        console.log('item');
    }

    add(): void {
        // this.modal
        //   .createStatic(FormEditComponent, { i: { id: 0 } })
        //   .subscribe(() => this.st.reload());
    }
}
