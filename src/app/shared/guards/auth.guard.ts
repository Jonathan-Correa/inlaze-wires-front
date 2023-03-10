import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.usersService.userData) {
      return true;
    }

    return this.usersService.getUserData().pipe(
      map((res) => {
        if (res.user != null) {
          this.usersService.userData = res.user as User;
        } else {
          this.router.navigate(['users/auth/signup']);
        }

        return res.status;
      })
    );
  }
}
