import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartsLogComponent } from './log.component';

describe('CartsLogComponent', () => {
  let component: CartsLogComponent;
  let fixture: ComponentFixture<CartsLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsLogComponent ]
    })
    .compileComponents();
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
