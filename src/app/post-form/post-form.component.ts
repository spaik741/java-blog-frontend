import { Component, OnInit } from '@angular/core';
import {PostsService} from "../service/posts.service";
import {Post} from "../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title: string
  text: string

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text && this.title){
      // @ts-ignore
      const post: Post = {datePost: Date.now(), text: this.text, title: this.title}
      this.postService.createPost(post).subscribe();
    }
  }
}
