import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const COMMENT_API = 'api/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAllComment(id: any): Observable<Comment> {
    return this.http.get<Comment>(COMMENT_API + '/' + id);
  }
}
