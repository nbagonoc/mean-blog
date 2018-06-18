import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import { tokenNotExpired } from "angular2-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // domain = "http://localhost:5000/";
  domain = "";
  authToken;
  user;
  options;

  constructor(private http: HttpClient) {}

  loadToken() {
    const token = localStorage.getItem("token");
    this.authToken = token;
  }

  // register the user
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-type", "applications/json");
    return this.http.post(this.domain + "authentication/register", user, {
      headers
    });
  }

  // check username
  checkUsername(username) {
    let headers = new HttpHeaders();
    headers.append("Content-type", "applications/json");
    return this.http.get(
      this.domain + "authentication/checkUsername/" + username,
      { headers }
    );
  }

  // check email
  checkEmail(email) {
    let headers = new HttpHeaders();
    headers.append("Content-type", "applications/json");
    return this.http.get(this.domain + "authentication/checkEmail/" + email, {
      headers
    });
  }

  login(user) {
    let headers = new HttpHeaders();
    headers.append("Content-type", "applications/json");
    return this.http.post(this.domain + "authentication/login", user, {
      headers
    });
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // localstorage
  storeUserData(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authToken
    });
    return this.http.get(this.domain + "authentication/profile", {
      headers
    });
  }
}
