import { Injectable } from '@angular/core';
import { Blog } from './models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {


  blogs: Blog[];

  constructor() {
    this.blogs = [];

  }

  agregarPost(blog: Blog) {
    this.blogs.push(blog);
    console.log(this.blogs);

  }

  getAllPost(): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      resolve(this.blogs);

    });
  }

  getPostsByCategoria(cat: string): Promise<Blog[]> {

    var arrayFiltrado = this.blogs.filter(b => b.categoria === cat);
    return new Promise((resolve, reject) => {
      resolve(arrayFiltrado);
    });

  }


}



