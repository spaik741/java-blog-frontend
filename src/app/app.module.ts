import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./auth/auth.component";
import { PostsComponent } from './posts/posts.component';
import { PostViewComponent } from './post-view/post-view.component';
import {authInterceptorProviders} from "./service/auth-interceptor.service";
import { PostFormComponent } from './post-form/post-form.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostsComponent,
    PostViewComponent,
    PostFormComponent,
    UserViewComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
