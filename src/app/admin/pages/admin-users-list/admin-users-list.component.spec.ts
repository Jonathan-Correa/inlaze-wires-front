import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AdminUsersListComponent } from './admin-users-list.component';

describe('AdminUsersComponent', () => {
  let component: AdminUsersListComponent;
  let fixture: ComponentFixture<AdminUsersListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminUsersListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
