import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: "app-read-blog",
  templateUrl: "./read-blog.component.html",
  styleUrls: ["./read-blog.component.css"]
})
export class ReadBlogComponent implements OnInit {
  message;
  blog;
  messageClass;
  currentUrl;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.readBlog(this.currentUrl.id).subscribe(data => {
      if ((data as any).success == false) {
        this.messageClass = "alert alert-danger";
        this.message = (data as any).message;
      } else {
        this.blog = (data as any).blog;
        this.loading = false;
      }
    });
  }
}
