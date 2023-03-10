// IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
// DECLARATIONS
import { AdminUsersListComponent } from './pages/admin-users-list/admin-users-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [
    AdminUsersListComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    UsersModule,
  ],
})
export class AdminModule {}
