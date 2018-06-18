import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogService {
  options;
  domain = this.authService.domain;

  constructor(private authService: AuthService, private http: HttpClient) {}

  // cteate a new blog post
  newBlog(blog) {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.post(this.domain + "blog/newBlog", blog, {
      headers
    });
  }

  getAllBlogs() {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.get(this.domain + "blog/allBlogs", {
      headers
    });
  }

  getSingleBlog(id) {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.get(this.domain + "blog/singleBlog/" + id, {
      headers
    });
  }

  readBlog(id) {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.get(this.domain + "blog/readBlog/" + id, {
      headers
    });
  }

  editBlog(blog) {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.put(this.domain + "blog/updateBlog/", blog, {
      headers
    });
  }

  deleteBlog(id) {
    this.authService.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.authToken
    });
    return this.http.delete(this.domain + "blog/deleteBlog/" + id, {
      headers
    });
  }
}
