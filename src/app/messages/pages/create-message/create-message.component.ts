import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessagesService } from '../../messages.service';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router,
    private messagesService: MessagesService,
    public usersService: UsersService,
    public appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(700),
      ]),
    });
  }

  create(form: FormGroup) {
    if (!form.valid) return;

    console.log(form.value)
    this.messagesService.createMessage(form.value).subscribe(() => {
      console.log('Mensaje creado');
    });
  }
}
