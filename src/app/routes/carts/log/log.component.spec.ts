import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartsService } from 'src/app/shared/services/carts.service';

import { CartsLogComponent } from './log.component';

describe('CartsLogComponent', () => {
    let component: CartsLogComponent;
    let fixture: ComponentFixture<CartsLogComponent>;
    let overlay: Overlay;
    let cartsService: CartsService;
    let httpTestingController: HttpTestingController;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CartsLogComponent],
            imports: [HttpClientTestingModule],
            providers: [Overlay, CartsService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartsLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
