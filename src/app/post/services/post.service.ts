import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = "http://api-platform.golian.hekko24.pl/public/api/";
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = this.apiUrl + "posts?page=2";
  public lastPage: string = "";

  constructor(private http: HttpClient) { }

  parseLink(link?: string): string {
    if (link) {
      return link.replace("public/api/", "")
    }
    else {
      return "";
    }
  }

  public getPaginationLinks(response) {
    this.firstPage = this.parseLink(response["hydra:view"]["hydra:first"]);
    this.lastPage = this.parseLink(response["hydra:view"]["hydra:last"]);
    this.prevPage = this.parseLink(response["hydra:view"]["hydra:prev"]);
    this.nextPage = this.parseLink(response["hydra:view"]["hydra:next"]);
    console.log("this.firstPage",this.firstPage);
    console.log("this.lastPage",this.lastPage);
    console.log("this.prevPage",this.prevPage);
    console.log("this.nextPage",this.nextPage);
  }

  public getPosts(url: string) {
    return this.http.get<Post[]>(url)
      .pipe(tap(response => {
        this.getPaginationLinks(response);
      }))
  }
}
