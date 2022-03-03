import {Component, OnInit} from '@angular/core';
import {PostsService} from "../service/posts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Post} from "../models/Post";
import {Comment} from "../models/Comment";
import {CommentService} from "../service/comment.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  post: Post

  comments: Comment[]

  message: string

  constructor(private postService: PostsService,
              private commentService: CommentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
        if (params.id) {
          console.log(params.id)
          this.postService.getPost(params.id).subscribe(p => {
            console.log('Post:', this.post)
            this.post = {
              id: p.id,
              title: p.title,
              text: p.text,
              datePost: p.datePost
            };
            console.log('Post:', this.post)
          });
        }
      }
    );
    this.route.params.subscribe((params: Params) => {
        if (params.id) {
          // @ts-ignore
          this.commentService.getAllComment(params.id).subscribe(c => this.comments = c);
        }
      }
    );
  }

  addComment() {
    if (this.message) {
      this.commentService.addComment(this.message, this.post.id).subscribe();
    }
  }
}
