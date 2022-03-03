import { Component, OnInit } from '@angular/core';
import {PostsService} from "../service/posts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Post} from "../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postsService: PostsService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let wordSearch: string;
    this.activatedRoute.params.subscribe((params: Params) => wordSearch = params.word);
    // @ts-ignore
    if (wordSearch) {
        console.log('Word', wordSearch);
        this.getAllPostsWithSearch(wordSearch);
    } else {
      this.getAllPosts();
    }
  }

  getAllPosts(): void {
    // @ts-ignore
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  getAllPostsWithSearch(word: string): void {
    // @ts-ignore
    this.postsService.getAllPostsWithSearch(word).subscribe(posts => this.posts = posts);
  }



}
