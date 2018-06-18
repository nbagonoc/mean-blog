import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";

// SERVICES
import { AuthService } from "../app/services/auth.service";
import { BlogService } from "../app/services/blog.service";
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthGuard } from "./guards/notAuth.guard";
import { BlogComponent } from "./components/blog/blog.component";
import { EditBlogComponent } from "./components/blog/edit-blog/edit-blog.component";
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { ReadBlogComponent } from './components/blog/read-blog/read-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    ReadBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, BlogService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
