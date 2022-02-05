import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {PostsComponent} from "./posts/posts.component";
import {PostViewComponent} from "./post-view/post-view.component";
import {PostFormComponent} from "./post-form/post-form.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'view/:id', component: PostViewComponent},
  {path: 'edit', component: PostFormComponent},
  {path: 'viewUser', component: UserViewComponent},
  {path: 'registration', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
