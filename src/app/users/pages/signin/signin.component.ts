import { Component, OnInit } from '@angular/core';
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
export class SigninComponent implements OnInit {
  public form: FormGroup;

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

  ngOnInit(): void {}

  signin(form: any) {
    if (form.valid) {
      this.usersService.signin(form.value).subscribe((res) => {
        this.usersService.userData = res as User;
        return this.router.navigate(['']);
      });
    }
  }

  onClickSignUpButton() {
    this.router.navigate(['users/auth/signup']);
  }
}
