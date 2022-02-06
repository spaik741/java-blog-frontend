import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/Post";
import {Observable} from "rxjs";

const POST_API = 'api/posts';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post> {
    return this.http.get<Post>(POST_API);
  }

  getAllPostsWithSearch(word: string): Observable<Post> {
    return this.http.get<Post>(POST_API + '/search/' + word);
  }

  getPost(id: any): Observable<Post> {
    console.log('Get post Request ', id)
    return this.http.get<Post>(POST_API + '/' + id);
  }

  createPost(post: Post): Observable<any> {
    console.log(post);
    return this.http.post(POST_API, post);
  }

  deletePost(id: number) {
    console.log('Delete book id:', id, POST_API + id);
    return this.http.delete(POST_API + '/' + id);
  }
}
