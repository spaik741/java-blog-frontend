import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }

}
