import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { STColumn, STComponent } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { ICarts } from 'src/app/shared/models/ICarts';

import { CartsService } from './../../../shared/services/carts.service';

@Component({
    selector: 'app-carts-log',
    templateUrl: './log.component.html',

    styleUrls: ['index.less']
})
export class CartsLogComponent implements OnInit {
    @ViewChild('st') private readonly st!: STComponent;
    public carts: ICarts[] = [];

    constructor(private loadingSrv: LoadingService, private cartsService: CartsService, private router: Router) {}

    ngOnInit(): void {
        this.show('spin');
        this.getAllCarts();
    }

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
                        this.cartsService.deleteData(item.id).subscribe(res => {
                            console.log(res);
                        });
                    }
                }
            ]
        }
    ];

    public getAllCarts() {
        this.cartsService.getData().subscribe(data => {
            console.log(data);
            this.carts = data;
        });
    }
    public show(type: LoadingType): void {
        this.loadingSrv.open({ type });
        setTimeout(() => this.loadingSrv.close(), 1000);
    }
    public startEdit(id: string) {
        console.log('item');
    }
}
