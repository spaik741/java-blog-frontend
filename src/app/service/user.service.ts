import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/User";

const USER_API = 'api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private router: Router) {
  }


  getCurrentUser() : Observable<User>{
    // @ts-ignore
    return this.http.post<User>(USER_API);
  }

  createUser(user: User) : Observable<any>{
    return this.http.post(USER_API + '/save', user);
  }

}
