import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { BlogService } from "../../services/blog.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  user;
  blogPosts;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private blogService: BlogService,
    private router: Router
  ) {
    this.createNewBlogForm();
  }

  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5)
        ])
      ],
      body: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(640),
          Validators.minLength(5)
        ])
      ]
    });
  }

  enableFormNewBlogForm() {
    this.form.get("title").enable();
    this.form.get("body").enable();
  }

  disableFormNewBlogForm() {
    this.form.get("title").disable();
    this.form.get("body").disable();
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
    this.getAllBlogs();
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }

  onBlogSubmit() {
    this.processing = true;
    this.disableFormNewBlogForm();

    const blog = {
      title: this.form.get("title").value,
      body: this.form.get("body").value,
      createdBy: this.user.username
    };

    this.blogService.newBlog(blog).subscribe(data => {
      if ((data as any).success) {
        this.messageClass = "alert alert-success";
        this.message = (data as any).message;
        this.getAllBlogs();
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message = false;
          this.form.reset();
          this.enableFormNewBlogForm();
        }, 2000);
      } else {
        this.messageClass = "alert alert-danger";
        this.message = (data as any).message;
        this.processing = false;
        this.enableFormNewBlogForm();
      }
    });
  }

  goBack() {
    window.location.reload();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = (data as any).blogs;
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = (profile as any).user;
    });

    this.getAllBlogs();
  }
}
