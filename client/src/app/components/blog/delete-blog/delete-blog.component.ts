import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: "app-delete-blog",
  templateUrl: "./delete-blog.component.html",
  styleUrls: ["./delete-blog.component.css"]
})
export class DeleteBlogComponent implements OnInit {
  message;
  messageClass;
  foundBlog = false;
  processing = false;
  blog;
  currentUrl;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  deleteBlog() {
    console.log("clicked");
    this.processing = true;
    this.blogService.deleteBlog(this.currentUrl.id).subscribe(data => {
      console.log("clicked and goes to the service");
      if ((data as any).success === false) {
        this.messageClass = "alert alert-danger";
        this.message = (data as any).message;
        console.log("fail");
      } else {
        this.messageClass = "alert alert-success";
        this.message = (data as any).message;
        setTimeout(() => {
          this.router.navigate(["/blog"]);
        }, 2000);
        console.log("deleted");
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      if ((data as any).success == false) {
        this.messageClass = "alert alert-danger";
        this.message = (data as any).message;
      } else {
        this.blog = {
          title: (data as any).blog.title
        };
        this.foundBlog = true;
      }
    });
  }
}
