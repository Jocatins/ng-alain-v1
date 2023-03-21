import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/shared/services/carts.service';

import { EditCartsComponent } from './edit-carts.component';

describe('EditCartsComponent', () => {
    let component: EditCartsComponent;
    let fixture: ComponentFixture<EditCartsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditCartsComponent],
            imports: [HttpClientTestingModule],
            providers: [
                UntypedFormBuilder,
                CartsService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: new Map([['myParam', 'myValue']])
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditCartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
