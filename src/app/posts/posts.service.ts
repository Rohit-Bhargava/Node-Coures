import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Title } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {};

  getPosts() {
    this.http.get<{message: 'string', posts: any}>('http://localhost:3000/api/posts')
    .pipe(map((postData)=>{
      return postData.posts.map(post=>{
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })

    }))
    .subscribe((transformPosts)=>{
        this.posts = transformPosts;
        this.postsUpdated.next([...this.posts]);

    })
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string){
    return {...this.posts.find(p=>p.id==id)}
  }

  addPost(title: string, content: string) {
    const post: Post = {
      id: null, title: title, content: content,
      subscribe: function (arg0: {}) {
        throw new Error('Function not implemented.');
      }
    };
    this.http
    .post<{message: string}>('http://localhost:3000/api/posts', post)
    .subscribe(responsData=>{
      console.log(responsData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });

  }

  updatePost(id: string, title: string, content: string ){
    const post: Post = {
      id: 'id',
      title: 'title',
      content: 'content',
      subscribe: function (arg0: {}) {
        throw new Error('Function not implemented.');
      } 
    }
    this.http.put("http://localhost:3000/api/posts/" + id, post)
    .subscribe(response=>console.log(response));
  }

  deletePost(postId:string): void{
    this.http.delete("http://localhost:3000/api/posts/" + postId)
    .subscribe(()=>{
      const postsUpdated = this.posts.filter(post => post.id !== postId);
      const posts = postsUpdated;
      this.postsUpdated.next([...this.posts]);
    })
  }
}
