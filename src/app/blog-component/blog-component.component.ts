import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Blog } from '../models/blog.model';


@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  allPosts: Blog[];

  constructor(private blogService: BlogserviceService) {
    this.allPosts = [];
  }

  async ngOnInit() {
    this.allPosts = await this.blogService.getAllPost();
  }

}
