// IMPORTS
import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// DECLARATIONS
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { ButtonComponent } from './components/button/button.component';
import { MessageCardComponent } from './components/message-card/message-card.component';

const components = [
  NavbarComponent,
  InputFormComponent,
  ButtonComponent,
  MessageCardComponent,
];

@NgModule({
  declarations: [
    components,
    ForbiddenComponent,
    UnauthorizedComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [components],
  providers: [
    components,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormComponent),
      multi: true,
    },
  ],
})
export class SharedModule {}
