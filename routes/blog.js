const User = require("../models/User");
const Blog = require("../models/Blog");
const jwt = require("jsonwebtoken");
const db = require("../config/dbSecretKeys");

module.exports = router => {
  // POST | create blog
  router.post("/newBlog", (req, res) => {
    if (!req.body.title) {
      res.json({ success: false, message: "Blog title is required" });
    } else if (!req.body.body) {
      res.json({ success: false, message: "Content body is required" });
    } else if (!req.body.createdBy) {
      res.json({ success: false, message: "Author is required" });
    } else {
      const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        createdBy: req.body.createdBy
      });
      blog.save(err => {
        if (err) {
          if (err.errors) {
            if (err.errors.title) {
              res.json({ success: false, message: err.errors.title.message });
            } else if (err.errors.body) {
              res.json({ success: false, message: err.errors.body.message });
            } else {
              res.json({ success: false, message: err.errmsg });
            }
          } else {
            res.json({ success: false, message: err });
          }
        } else {
          res.json({ success: true, message: "Blog saved!" });
        }
      });
    }
  });

  // GET | get all the blogs
  router.get("/allBlogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
      if (err) {
        res.json({ success: false, message: err });
      } else if (!blogs) {
        res.json({ success: false, message: "No blogs availabe" });
      } else {
        res.json({ success: true, blogs });
      }
    }).sort({ _id: -1 });
  });

  // GET | get single post
  router.get("/singleBlog/:id", (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: "No blog ID was provided" });
    } else {
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: "Not a valid blog id" });
        } else if (!blog) {
          res.json({ success: false, message: "Blog not found" });
        } else {
          User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else if (!user) {
              res.json({
                success: false,
                message: "You are not authorized. Please sign-in"
              });
            } else if (user.username !== blog.createdBy) {
              res.json({
                success: false,
                message: "You are not authorized to edit this post"
              });
            } else {
              res.json({ success: true, blog });
            }
          });
        }
      });
    }
  });

  // GET | get single post (for viewing only)
  router.get("/readBlog/:id", (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: "No blog ID was provided" });
    } else {
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: "Not a valid blog id" });
        } else if (!blog) {
          res.json({ success: false, message: "Blog not found" });
        } else {
          User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else if (!user) {
              res.json({
                success: false,
                message: "You are not authorized. Please sign-in"
              });
            } else {
              res.json({ success: true, blog });
            }
          });
        }
      });
    }
  });

  // PUT | update blog post
  router.put("/updateBlog", (req, res) => {
    if (!req.body._id) {
      res.json({ success: false, message: "no blog id provided" });
    } else {
      Blog.findOne({ _id: req.body._id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: "not a valid blog id" });
        } else if (!blog) {
          res.json({ success: false, message: "blog id not found" });
        } else {
          User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else if (!user) {
              res.json({
                success: false,
                message: "unable to authenticate user"
              });
            } else if (user.username !== blog.createdBy) {
              res.json({
                success: false,
                message: "You are not authorized to edit this blog post"
              });
            } else {
              blog.title = req.body.title;
              blog.body = req.body.body;
              blog.save(err => {
                if (err) {
                  res.json({ success: false, message: err });
                } else {
                  res.json({ success: true, message: "blog updated!" });
                }
              });
            }
          });
        }
      });
    }
  });

  router.delete("/deleteBlog/:id", (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: "No id provided" });
    } else {
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: "invalid id" });
        } else if (!blog) {
          res.json({ success: false, message: "blog was not found" });
        } else {
          User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err });
            } else if (!user) {
              res.json({
                success: false,
                message: "unable to authenticate user"
              });
            } else if (user.username !== blog.createdBy) {
              res.json({
                success: false,
                message: "You are not authorized to delete this blog post"
              });
            } else {
              blog.remove(err => {
                if (err) {
                  res.json({ success: false, message: err });
                } else {
                  res.json({ success: true, message: "blog post deleted" });
                }
              });
            }
          });
        }
      });
    }
  });

  return router;
};
