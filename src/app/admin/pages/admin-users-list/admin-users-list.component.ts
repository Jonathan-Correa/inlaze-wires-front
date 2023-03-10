import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../admin.service';
import { User } from 'src/app/shared/interfaces/user';
import { ViewComponent } from 'src/app/shared/components/view/view.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
})
export class AdminUsersListComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  @ViewChild('view') viewComponent: ViewComponent;

  public usersList = '';
  public users: any;

  ngOnInit(): void {
    this.list();
  }

  private list() {
    const params = new HttpParams()
      .set('field', JSON.stringify(['displayName', 'email']))
      .set('sort', JSON.stringify({ modified: -1 }));

    this.adminService.findAllUsers(params).subscribe((users: User[]) => {
      this.users = users;
    });
  }

  public delete(user: User) {
    const option = confirm(`¿Desea eliminar a ${user.displayName}?`);

    if (option === true) {
      this.adminService.deleteUser(user._id).subscribe(() => {
        this.list();
      });
    }
  }
}
