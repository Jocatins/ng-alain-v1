import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserAddUserFormComponent } from './add-user-form.component';

describe('AddUserAddUserFormComponent', () => {
  let component: AddUserAddUserFormComponent;
  let fixture: ComponentFixture<AddUserAddUserFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserAddUserFormComponent ]
    })
    .compileComponents();
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
