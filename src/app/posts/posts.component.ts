import { Component, OnInit } from '@angular/core';
import {PostsService} from "../service/posts.service";
import {Router} from "@angular/router";
import {Post} from "../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    // @ts-ignore
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  viewPost(id: any) {
    this.router.navigate( ['view'], {
      queryParams: {id: id}
    });
  }

}
