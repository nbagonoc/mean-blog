(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_blog_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/read-blog/read-blog.component */ "./src/app/components/blog/read-blog/read-blog.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENTS









// GUARDS


var appRoutes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: "blog",
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: "read-blog/:id",
        component: _components_blog_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_10__["ReadBlogComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: "edit-blog/:id",
        component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_8__["EditBlogComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: "delete-blog/:id",
        component: _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteBlogComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_12__["NotAuthGuard"]]
    },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_12__["NotAuthGuard"]] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "**", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_services_blog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_blog_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/blog/read-blog/read-blog.component */ "./src/app/components/blog/read-blog/read-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// COMPONENTS







// SERVICES








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
                _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_17__["EditBlogComponent"],
                _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_18__["DeleteBlogComponent"],
                _components_blog_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_19__["ReadBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _app_services_blog_service__WEBPACK_IMPORTED_MODULE_13__["BlogService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_15__["NotAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\" *ngIf=\"user\">\n  <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\" *ngIf=\"message && newPost\">\n    {{message}}\n  </div>\n  <div class=\"card shadow\">\n    <div class=\"card-header\">\n      welcome to the blog\n    </div>\n    <div class=\"card-body\">\n      <button class=\"btn btn-outline-success mr-1\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">\n        <i class=\"fa fa-plus\"></i> New Post</button>\n      <button [disabled]=\"loadingBlogs\" class=\"btn btn-outline-secondary\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\">\n        <i class=\"fa fa-sync-alt mr-1\"></i>Reload</button>\n\n      <!-- blog form -->\n      <form [formGroup]=\"form\" new=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n        <!-- title field -->\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input [ngClass]=\"{'is-valid':form.controls.title.valid, 'is-invalid':form.controls.title.dirty && form.controls.title.errors}\"\n            type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Title\" formControlName=\"title\" autocomplete=\"off\" />\n          <div class=\"invalid-feedback\">\n            <span *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required</span>\n            <span *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">min 5 and max 50 characters</span>\n          </div>\n        </div>\n        <!-- body field -->\n        <div class=\"form-group\">\n          <label for=\"body\">Content Body</label>\n          <textarea [ngClass]=\"{'is-valid':form.controls.body.valid, 'is-invalid':form.controls.body.dirty && form.controls.body.errors}\"\n            class=\"form-control\" name=\"body\" placeholder=\"Content body\" formControlName=\"body\" autocomplete=\"off\" rows=\"5\"></textarea>\n          <div class=\"invalid-feedback\">\n            <span *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required</span>\n            <span *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">min 5 and max 640 characters</span>\n          </div>\n        </div>\n        <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-outline-success mr-1\">\n          <i class=\"fa fa-check-circle mr-1\"></i>Submit\n        </button>\n        <!-- <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-outline-danger mr-1\" (click)=\"goBack()\">\n          <i class=\"fa fa-times-circle mr-1\"></i>Cancel</button> -->\n      </form>\n    </div>\n  </div>\n  <!-- blog list -->\n  <ul *ngIf=\"!newPost\" class=\"list-group shadow mt-3\">\n    <li class=\"list-group-item\" *ngFor=\"let blog of blogPosts\">\n      <a href=\"#\" [routerLink]=\"['/read-blog/', blog._id]\" class=\"text-dark\">\n        <h5 class=\"mb-0\">{{blog.title}}</h5>\n      </a>\n      <span class=\"small text-muted\">\n        By: {{blog.createdBy}} | On: {{blog.createdAt | date:'MMM dd, yyyy'}}\n      </span>\n      <p class=\"mb-0\">{{blog.body}}</p>\n      <div *ngIf=\"user.username == blog.createdBy\" class=\"mt-2 border-top pt-2\">\n        <!-- Likes: {{blog.likes}} Dislikes:{{blog.dislikes}} -->\n        <a [routerLink]=\"['/edit-blog/', blog._id]\" href=\"#\" class=\"btn btn-outline-success btn-sm mr-1\">\n          <i class=\"fa fa-pencil-alt mr-1\"></i>Edit</a>\n        <a [routerLink]=\"['/delete-blog/', blog._id]\" href=\"#\" class=\"btn btn-outline-danger btn-sm\">\n          <i class=\"fa fa-trash-alt mr-1\"></i>Delete</a>\n      </div>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(formBuilder, authService, blogService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.router = router;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.createNewBlogForm();
    }
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ])
            ],
            body: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(640),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ])
            ]
        });
    };
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get("title").enable();
        this.form.get("body").enable();
    };
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get("title").disable();
        this.form.get("body").disable();
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        this.getAllBlogs();
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 4000);
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableFormNewBlogForm();
        var blog = {
            title: this.form.get("title").value,
            body: this.form.get("body").value,
            createdBy: this.user.username
        };
        this.blogService.newBlog(blog).subscribe(function (data) {
            if (data.success) {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                _this.getAllBlogs();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = false;
                    _this.form.reset();
                    _this.enableFormNewBlogForm();
                }, 2000);
            }
            else {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableFormNewBlogForm();
            }
        });
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.getAllBlogs();
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-blog",
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n  <div class=\"col-lg-6 col-md-8 mx-auto\" *ngIf=\"foundBlog\">\n    <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\" *ngIf=\"message\">\n      {{message}}\n    </div>\n    <div class=\"card shadow\">\n      <div class=\"card-header\">\n        Please confirm\n      </div>\n      <div class=\"card-body\">\n        Are you sure you want to delete\n        <strong>{{blog.title}}</strong>? Once deleted, this action cannot be undone.\n      </div>\n      <div class=\"card-footer\">\n        <button [disabled]=\"processing\" (click)=\"deleteBlog()\" type=\"button\" class=\"btn btn-outline-danger btn-sm mr-2\" data-dismiss=\"\">\n          <i class=\"fa fa-trash-alt mr-2\"></i>Delete</button>\n        <button [disabled]=\"processing\" (click)=\"goBack()\" type=\"button\" class=\"btn btn-outline-warning btn-sm\">\n          <i class=\"fas fa-times-circle mr-1\"></i> Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
    }
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        console.log("clicked");
        this.processing = true;
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            console.log("clicked and goes to the service");
            if (data.success === false) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                console.log("fail");
            }
            else {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(["/blog"]);
                }, 2000);
                console.log("deleted");
            }
        });
    };
    DeleteBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (data.success == false) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
            }
            else {
                _this.blog = {
                    title: data.blog.title
                };
                _this.foundBlog = true;
            }
        });
    };
    DeleteBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-delete-blog",
            template: __webpack_require__(/*! ./delete-blog.component.html */ "./src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__(/*! ./delete-blog.component.css */ "./src/app/components/blog/delete-blog/delete-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n  <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\" *ngIf=\"message\">\n    {{message}}\n  </div>\n  <div class=\"card shadow\" *ngIf=\"!loading\">\n    <div class=\"card-header\">\n      edit blog post\n    </div>\n    <div class=\"card-body\">\n      <!-- Edit Blog Form -->\n      <form (submit)=\"updateBlogSubmit()\">\n\n        <!-- Title Field -->\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <!-- Title Input -->\n          <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog Title\" class=\"form-control\" [(ngModel)]=\"blog.title\"\n          />\n        </div>\n\n        <!-- Body Field -->\n        <div class=\"form-group\">\n          <label for=\"body\">Body</label>\n          <!-- Body Input -->\n          <textarea [disabled]=\"processing\" name=\"body\" rows=\"5\" [(ngModel)]=\"blog.body\" class=\"form-control\" placeholder=\"*Blog Body\"></textarea>\n        </div>\n\n        <!-- Save Changes Button -->\n        <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-outline-success mr-2\">Save Changes</button>\n        <!-- Go Back Button -->\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-outline-warning mr-2\" (click)=\"goBack()\">Go Back</button>\n        <!-- Delete Button -->\n        <a [routerLink]=\"['/delete-blog/', blog._id]\">\n          <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n        </a>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogService.editBlog(this.blog).subscribe(function (data) {
            if (data.success == true) {
                console.log("clicked we are good!");
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(["/blog"]);
                }, 2000);
            }
            else {
                console.log("clicked but failed proccess");
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
            }
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (data.success == false) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
            }
            else {
                _this.blog = data.blog;
                _this.loading = false;
            }
        });
    };
    EditBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-blog",
            template: __webpack_require__(/*! ./edit-blog.component.html */ "./src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/blog/edit-blog/edit-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/read-blog/read-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/read-blog/read-blog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/read-blog/read-blog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blog/read-blog/read-blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n  <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\" *ngIf=\"message\">\n    {{message}}\n  </div>\n  <div class=\"card shadow\" *ngIf=\"!loading\">\n    <div class=\"card-body\">\n      <h3 class=\"text-capitalize\">{{blog.title}}</h3>\n      <span class=\"text-muted small\">Created by: {{blog.createdBy}} | Created on: {{blog.createdAt | date:\"MMM dd, yyyy\"}}</span>\n      <hr>\n      <p>{{blog.body}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/read-blog/read-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/read-blog/read-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: ReadBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadBlogComponent", function() { return ReadBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadBlogComponent = /** @class */ (function () {
    function ReadBlogComponent(activatedRoute, blogService) {
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.loading = true;
    }
    ReadBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.readBlog(this.currentUrl.id).subscribe(function (data) {
            if (data.success == false) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
            }
            else {
                _this.blog = data.blog;
                _this.loading = false;
            }
        });
    };
    ReadBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-read-blog",
            template: __webpack_require__(/*! ./read-blog.component.html */ "./src/app/components/blog/read-blog/read-blog.component.html"),
            styles: [__webpack_require__(/*! ./read-blog.component.css */ "./src/app/components/blog/read-blog/read-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], ReadBlogComponent);
    return ReadBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"card shadow\">\n    <div class=\"card-header\">\n      welcome to your dashboard\n    </div>\n    <div class=\"card-body\">\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam animi ipsum placeat eos nulla quaerat ex architecto et praesentium.\n      Laboriosam ea quaerat sequi consectetur dolore molestias nulla facere corporis rerum?\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <div class=\"cover-text\">\n    <h1 class=\"display-3 text-light font-weight-bold\">\n      Get started\n    </h1>\n    <div class=\"btn-group-vertical\">\n      <a href=\"#\" routerLink=\"/login\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-outline-light btn-lg px-5\">Already a member?</a>\n      <a href=\"#\" routerLink=\"/register\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-outline-light btn-lg px-5\">Not yet a member?</a>\n      <a href=\"#\" routerLink=\"/dashboard\" *ngIf=\"authService.loggedIn()\" class=\"btn btn-outline-light btn-lg px-5\">Start writing awesome stuff!</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-align\">\n  <div class=\"vertical-align-item\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-8 mx-auto\">\n          <!-- Custom Success/Error Message -->\n          <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\">\n            {{message}}\n          </div>\n          <div class=\"card shadow\">\n            <div class=\"card-header\">\n              Sign-in\n            </div>\n            <div class=\"card-body\">\n              <!-- Login Form -->\n              <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n                <!-- Username Field -->\n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input [ngClass]=\"{'is-invalid': form.controls.username.errors && form.controls.username.dirty, 'is-valid': form.controls.username.valid && form.controls.username.dirty }\"\n                    class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n                  </div>\n                </div>\n                <!-- Password Field  -->\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input [ngClass]=\"{'is-invalid': form.controls.password.errors && form.controls.password.dirty, 'is-valid': form.controls.password.valid && form.controls.password.dirty }\"\n                    class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\"\n                  />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n                  </div>\n                </div>\n                <!-- Submit Button -->\n                <button [disabled]=\"!form.valid || processing\" class=\"btn btn-outline-success\" type=\"submit\">\n                  <i class=\"fa fa-check-circle mr-2\"></i>Sign-in</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, authGuard, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.authGuard = authGuard;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls["username"].disable();
        this.form.controls["password"].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls["username"].enable();
        this.form.controls["password"].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get("username").value,
            password: this.form.get("password").value
        };
        this.authService.login(user).subscribe(function (data) {
            if (data.success === true) {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                _this.authService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(["/dashboard"]);
                    }
                }, 2000);
            }
            else {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectUrl) {
            this.messageClass = "alert alert-danger";
            this.message = "Access denied. Please Log-in";
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light shadow\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">MeanBlog</a>\n    <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Home</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"!authService.loggedIn()\" class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Register</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"authService.loggedIn()\" class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/blog\">Blog</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/profile\">Profile</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" href=\"/\" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(["/"]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\" *ngIf=\"user\">\n  <div class=\"card shadow\">\n    <div class=\"card-header\">\n      {{user.username}}\n    </div>\n    <div class=\"card-body\">\n      {{user.email}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-align\">\n  <div class=\"vertical-align-item\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-8 mx-auto\">\n          <div [ngClass]=\"messageClass\" class=\"\" role=\"alert\">\n            {{message}}\n          </div>\n          <div class=\"card shadow\">\n            <div class=\"card-header\">\n              Sign-up\n            </div>\n            <div class=\"card-body\">\n              <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n                <!-- Username Input -->\n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input [ngClass]=\"{'is-invalid': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'is-valid': !form.controls.username.errors && usernameValid}\"\n                    type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Username\" formControlName=\"username\"\n                    (blur)=\"checkUsername()\" />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <span *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</span>\n                    <span *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</span>\n                    <span *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</span>\n                    <span *ngIf=\"usernameMessage\">{{usernameMessage}}</span>\n                  </div>\n                  <!-- <div class=\"invalid-feedback\">\n                                <span *ngIf=\"usernameMessage\">{{usernameMessage}}</span>\n                              </div> -->\n                </div>\n\n                <!-- Email Input -->\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input [ngClass]=\"{'is-invalid': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'is-valid': !form.controls.email.errors && emailValid}\"\n                    type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Email\" formControlName=\"email\"\n                    (blur)=\"checkEmail()\" />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <span *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</span>\n                    <span *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</span>\n                    <span *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</span>\n                    <span *ngIf=\"usernameMessage\">{{emailMessage}}</span>\n                  </div>\n                </div>\n\n                <!-- Password Input -->\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input [ngClass]=\"{'is-invalid': (form.controls.password.errors && form.controls.password.dirty), 'is-valid': !form.controls.password.errors}\"\n                    type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Password\" formControlName=\"password\"\n                  />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <span *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</span>\n                    <span *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</span>\n                    <span *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</span>\n                  </div>\n                </div>\n\n                <!-- Confirm Password Input -->\n                <div class=\"form-group\">\n                  <label for=\"confirm\">Confirm Password</label>\n                  <input [ngClass]=\"{'is-invalid': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'is-valid': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"\n                    type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Confirm Password\" formControlName=\"confirm\"\n                  />\n                  <!-- Validation -->\n                  <div class=\"invalid-feedback\">\n                    <span *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</span>\n                    <span *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</span>\n                  </div>\n                </div>\n\n                <!-- Submit Input -->\n                <button [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-outline-success\">\n                  <i class=\"fa fa-check-circle mr-2\"></i>Sign-up</button>\n\n              </form>\n              <!-- Registration Form /-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                    this.validateEmail
                ])
            ],
            username: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ])
            ],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ])
            ],
            confirm: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ])
            ]
        }, { validator: this.matchingPasswords("password", "confirm") });
    };
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls["email"].disable();
        this.form.controls["username"].disable();
        this.form.controls["password"].disable();
        this.form.controls["confirm"].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls["email"].enable();
        this.form.controls["username"].enable();
        this.form.controls["password"].enable();
        this.form.controls["confirm"].enable();
    };
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateEmail: true };
        }
    };
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { matchingPasswords: true };
            }
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get("email").value,
            username: this.form.get("username").value,
            password: this.form.get("password").value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(["/login"]);
                }, 2000);
            }
            else {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
        });
    };
    // check the email
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        this.authService
            .checkEmail(this.form.get("email").value)
            .subscribe(function (data) {
            if (data.success) {
                _this.emailValid = true;
                _this.emailMessage = data.message;
            }
            else {
                _this.emailValid = false;
                _this.emailMessage = data.message;
            }
        });
    };
    // check the username
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        this.authService
            .checkUsername(this.form.get("username").value)
            .subscribe(function (data) {
            if (data.success) {
                _this.usernameValid = true;
                _this.usernameMessage = data.message;
            }
            else {
                _this.usernameValid = false;
                _this.usernameMessage = data.message;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(["/login"]); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/notAuth.guard.ts ***!
  \*****************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(["/dashboard"]); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // domain = "http://localhost:5000/";
        this.domain = "";
    }
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem("token");
        this.authToken = token;
    };
    // register the user
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("Content-type", "applications/json");
        return this.http.post(this.domain + "authentication/register", user, {
            headers: headers
        });
    };
    // check username
    AuthService.prototype.checkUsername = function (username) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("Content-type", "applications/json");
        return this.http.get(this.domain + "authentication/checkUsername/" + username, { headers: headers });
    };
    // check email
    AuthService.prototype.checkEmail = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("Content-type", "applications/json");
        return this.http.get(this.domain + "authentication/checkEmail/" + email, {
            headers: headers
        });
    };
    AuthService.prototype.login = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("Content-type", "applications/json");
        return this.http.post(this.domain + "authentication/login", user, {
            headers: headers
        });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // localstorage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authToken
        });
        return this.http.get(this.domain + "authentication/profile", {
            headers: headers
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // cteate a new blog post
    BlogService.prototype.newBlog = function (blog) {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.post(this.domain + "blog/newBlog", blog, {
            headers: headers
        });
    };
    BlogService.prototype.getAllBlogs = function () {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.get(this.domain + "blog/allBlogs", {
            headers: headers
        });
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.get(this.domain + "blog/singleBlog/" + id, {
            headers: headers
        });
    };
    BlogService.prototype.readBlog = function (id) {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.get(this.domain + "blog/readBlog/" + id, {
            headers: headers
        });
    };
    BlogService.prototype.editBlog = function (blog) {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.put(this.domain + "blog/updateBlog/", blog, {
            headers: headers
        });
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.authService.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
        });
        return this.http.delete(this.domain + "blog/deleteBlog/" + id, {
            headers: headers
        });
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nbagonoc/Documents/code/full-stack/mean-blog/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map