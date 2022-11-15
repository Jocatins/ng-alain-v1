import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData, STChange } from '@delon/abc/st';

import { IUsers } from 'src/app/shared/models/IUsers';
import { UsersService } from '../../../shared/services/users.service';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-users-log',
    templateUrl: './log.component.html'
})
export class UsersLogComponent implements OnInit {
    public usersList: IUsers[] = [];

    constructor(private usersService: UsersService, private msg: NzMessageService) {}

    ngOnInit(): void {
        this.getAllUsers();
    }
    @ViewChild('st') private readonly st!: STComponent;
    columns: STColumn[] = [
        { title: 'Id', index: 'id' },
        { title: 'First Name', index: 'name.firstname', render: 'name.firstname' },
        { title: 'Last Name', index: 'name.lastname', render: 'lastname' },
        {
            title: 'Username',
            index: 'username',
            render: 'username',
            sort: {
                compare: (a, b) => a.username - b.username
            }
        },
        { title: 'Email', index: 'email', render: 'email' },
        { title: 'Phone', index: 'phone', render: 'phone' },
        { title: 'City', index: 'address.city', render: 'city' },
        {
            title: 'Actions',
            buttons: [
                {
                    icon: 'edit',
                    text: 'Edit',
                    iif: i => !i.edit,
                    click: i => this.updateEdit(i, true)
                },
                {
                    text: `Save`,
                    iif: i => i.edit,
                    click: i => {
                        this.submit(i);
                    }
                },
                {
                    text: `Cancel`,
                    iif: i => i.edit,
                    click: i => this.updateEdit(i, false)
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
                        // ===========Fake Store method ================
                        // console.log('clicked id', item?.id);
                        // fetch(`https://fakestoreapi.com/users/${item.id}`, {
                        //   method: 'DELETE'
                        // })
                        //   .then(res => res.json())
                        //   .then(json => console.log(json));
                        // ========= Angular Method ===================
                        this.usersService.deleteData(item.id).subscribe(res => {
                            console.log(res);
                        });
                    }
                }
            ]
        }
    ];

    private submit(i: STData): void {
        this.msg.success(JSON.stringify(this.st.pureItem(i)));
        this.updateEdit(i, false);
    }

    private updateEdit(i: STData, edit: boolean): void {
        this.st.setRow(i, { edit }, { refreshSchema: true });
    }
    change(e: STChange): void {
        console.log(e);
    }

    getAllUsers(): void {
        this.usersService.getData().subscribe(data => {
            console.log('data', data);
            this.usersList = data;
        });
    }
}
