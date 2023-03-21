import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';

import { AddUserAddUserFormComponent } from './add-user-form.component';

describe('AddUserAddUserFormComponent', () => {
    let component: AddUserAddUserFormComponent;
    let fixture: ComponentFixture<AddUserAddUserFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientTestingModule],
            declarations: [AddUserAddUserFormComponent],
            providers: [UsersService],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddUserAddUserFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
