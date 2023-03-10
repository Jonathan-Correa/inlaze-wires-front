import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from 'src/app/shared/interfaces/user';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public form: FormGroup;

  public error?: string = null;

  constructor(
    private router: Router,
    public usersService: UsersService,
    public appComponent: AppComponent
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signin(form: any) {
    if (form.valid) {
      this.usersService.signin(form.value).subscribe((res) => {
        this.error = null;
        this.usersService.userData = res as User;
        return this.router.navigate(['']);
      }, () => {
        this.error = 'Incorrect Email or Password';
      });
    }
  }

  onClickSignUpButton() {
    this.router.navigate(['users/auth/signup']);
  }
}
