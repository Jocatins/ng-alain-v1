import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsersService } from 'src/app/shared/services/users.service';

import { UsersLogComponent } from './log.component';

describe('UsersLogComponent', () => {
    let component: UsersLogComponent;
    let fixture: ComponentFixture<UsersLogComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UsersLogComponent],
            imports: [HttpClientTestingModule],
            providers: [UsersService, NzMessageService, Overlay, UntypedFormBuilder]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
