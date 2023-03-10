import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private usersService: UsersService) {
    this.userData = this.usersService.userData;
  }

  userData: any;
  ngOnInit(): void {}
}
