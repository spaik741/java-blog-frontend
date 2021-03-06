import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/Comment";



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

  addComment(message: any, id: any ): Observable<any> {
    console.log('Comment: ', message, id);
    const commentDto: CommentDto = {
      id: id,
      message: message
    }
    console.log('CommentDto: ', commentDto);
    // @ts-ignore
    return this.http.post(COMMENT_API, commentDto);
  }
}


export interface CommentDto {
  id: any
  message: string
}
