import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public errors: any;
  constructor(public usersService: UsersService) {}
}
