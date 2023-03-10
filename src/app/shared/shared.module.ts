// IMPORTS
import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// DECLARATIONS
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ViewComponent } from './components/view/view.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';

const components = [
  NavbarComponent,
  ViewComponent,
  InputFormComponent,
  FormComponent,
  ButtonComponent,
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
    TranslateModule,
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
