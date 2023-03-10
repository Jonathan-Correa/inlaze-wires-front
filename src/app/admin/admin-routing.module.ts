import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUsersListComponent } from './pages/admin-users-list/admin-users-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'users',
        component: AdminUsersListComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
