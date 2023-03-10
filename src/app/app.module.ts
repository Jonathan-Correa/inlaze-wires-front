// DECLARATIONS
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';

// PROVIDERS
import { UsersService } from './users/users.service';
import { ErrorHandlerService } from './error-handler.service';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
// IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    SharedModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
