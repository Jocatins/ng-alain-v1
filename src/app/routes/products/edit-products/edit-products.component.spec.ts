import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductsComponent } from './edit-products.component';

describe('UpdateProductsLogComponent', () => {
    let component: EditProductsComponent;
    let fixture: ComponentFixture<EditProductsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditProductsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
