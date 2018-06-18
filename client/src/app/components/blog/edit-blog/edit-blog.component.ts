import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: "app-edit-blog",
  templateUrl: "./edit-blog.component.html",
  styleUrls: ["./edit-blog.component.css"]
})
export class EditBlogComponent implements OnInit {
  message;
  messageClass;
  blog;
  processing = false;
  currentUrl;
  loading = true;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  updateBlogSubmit() {
    this.processing = true;
    this.blogService.editBlog(this.blog).subscribe(data => {
      if ((data as any).success == true) {
        console.log("clicked we are good!");
        this.messageClass = "alert alert-success";
        this.message = (data as any).message;
        setTimeout(() => {
          this.router.navigate(["/blog"]);
        }, 2000);
      } else {
        console.log("clicked but failed proccess");
        this.messageClass = "alert alert-danger";
        this.message = (data as any).message;
        this.processing = false;
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
        this.blog = (data as any).blog;
        this.loading = false;
      }
    });
  }
}
