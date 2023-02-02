import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsLogComponent } from './log.component';

describe('ProductsLogComponent', () => {
    let component: ProductsLogComponent;
    let fixture: ComponentFixture<ProductsLogComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({ declarations: [ProductsLogComponent] }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
