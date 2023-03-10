import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../users/users.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    public appComponent: AppComponent,
    public usersService: UsersService,
  ) {}

  ngOnInit(): void {}

  logout() {
    return this.usersService.logout().subscribe((res) => {
      this.usersService.userData = null;
      this.router.navigate(['/users/auth/signin']);
    });
  }
}
