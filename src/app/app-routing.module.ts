// IMPORTS
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// DECLARATIONS
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { UnauthorizedComponent } from './shared/pages/unauthorized/unauthorized.component';
// PROVIDERS
import { AuthGuard } from './shared/guards/auth.guard';
import { ForbiddenComponent } from './shared/pages/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'myMessages', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    canActivate: [AuthGuard],
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule, TranslateModule],
})
export class AppRoutingModule {}
