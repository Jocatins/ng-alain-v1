import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { IUsers } from 'src/app/shared/models/IUsers';

import { UsersService } from '../../../../shared/services/users.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user-form.component.html',
    styles: []
})
export class AddUserAddUserFormComponent implements OnInit {
    public usersForm!: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder, private usersService: UsersService) {}

    ngOnInit(): void {
        this.usersFunction();
    }
    usersFunction() {
        this.usersForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            mobile: [null, [Validators.required]],
            email: [null, [Validators.required]],
            remember: [null]
        });
    }
    onSubmit(): void {
        if (this.usersForm.valid) {
            console.log('submit successfully', this.usersForm.value);
        } else {
            Object.values(this.usersForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
        this.postUsers(this.usersForm.value);
    }
    submitData(value: IUsers) {
        const body = {
            price: value.username,
            title: value.email,
            description: value.name
        };
    }
    postUsers(body: IUsers): void {
        this.usersService.postData(body).subscribe(res => {
            console.log(res);
        });
    }
}
