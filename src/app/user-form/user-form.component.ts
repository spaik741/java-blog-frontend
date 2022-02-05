import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../service/user.service";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  user: User;
  username: string;
  password1: string;
  password2: string;
  email: string;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }

  isSuccess() : boolean{
    return !!this.tokenStorageService.getToken();
  }

  registration() {
    if (this.username && this.email && this.password1 == this.password2) {
      const user: User = {
        email: this.email,
        password: this.password1,
        username: this.username
      }
      this.userService.createUser(user).subscribe();
    }
  }

}
