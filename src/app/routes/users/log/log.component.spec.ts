import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersLogComponent } from './log.component';

describe('UsersLogComponent', () => {
  let component: UsersLogComponent;
  let fixture: ComponentFixture<UsersLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLogComponent ]
    })
    .compileComponents();
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
