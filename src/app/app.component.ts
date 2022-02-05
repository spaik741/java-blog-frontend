import { Component } from '@angular/core';
import {TokenStorageService} from "./service/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'java-blog-frontend';

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService,
              private userService: UserService) {
  }

  logout() {
    this.tokenStorageService.logOut();
  }
}
