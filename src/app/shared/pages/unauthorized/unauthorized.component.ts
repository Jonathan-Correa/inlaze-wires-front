import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
})
export class UnauthorizedComponent implements OnInit {
  constructor(
    private router: Router,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {}

  public goToLogin() {
    return this.usersService.logout().subscribe(() => {
      this.usersService.userData = null;
      this.router.navigate(['/users/auth/signin']);
    });
  }
}
