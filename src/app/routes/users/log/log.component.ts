import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { STColumn, STComponent, STData, STChange } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IUsers } from 'src/app/shared/models/IUsers';

import { UsersService } from '../../../shared/services/users.service';

@Component({
    selector: 'app-users-log',
    templateUrl: './log.component.html'
})
export class UsersLogComponent implements OnInit {
    public usersList: IUsers[] = [];
    public usersForm!: UntypedFormGroup;
    public isVisible = false;

    constructor(
        private usersService: UsersService,
        private msg: NzMessageService,
        private loadingSrv: LoadingService,
        private fb: UntypedFormBuilder
    ) {}

    ngOnInit(): void {
        this.show('spin');
        this.getAllUsers();
        this.usersForm = this.fb.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            username: [null, Validators.required],
            email: [null, Validators.required],
            phone: [null, Validators.required],
            city: [null, Validators.required]
        });
    }
    @ViewChild('st') private readonly st!: STComponent;
    columns: STColumn[] = [
        { title: 'Id', index: 'id' },
        { title: 'First Name', index: 'name.firstname', render: 'firstname' },
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
                    text: 'Edit'
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
                        this.usersService.deleteData(item.id).subscribe(res => {
                            console.log(res);
                            this.getAllUsers();
                        });
                    }
                }
            ]
        }
    ];

    public show(type: LoadingType): void {
        this.loadingSrv.open({ type });
        setTimeout(() => this.loadingSrv.close(), 1000);
    }
    public submitData() {
        //    console.log(this.usersForm.value);
        if (this.usersForm.valid) {
            this.usersService.postData(this.usersForm.value).subscribe({
                next: res => {
                    alert('User added successfully');
                    this.usersForm.reset();
                    this.handleCancel();
                    this.getAllUsers();
                },
                error: () => {
                    alert('Error while adding User');
                }
            });
        }
    }

    getAllUsers(): void {
        this.usersService.getData().subscribe(data => {
            console.log('data', data);
            this.usersList = data;
        });
    }
    public showModal(): void {
        this.isVisible = true;
    }
    handleOk(): void {
        this.isVisible = false;
    }

    handleCancel(): void {
        //     console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
