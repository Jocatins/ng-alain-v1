import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCartsComponent } from './edit-products.component';

describe('UpdateProductsLogComponent', () => {
    let component: EditCartsComponent;
    let fixture: ComponentFixture<EditCartsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditCartsComponent]
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
