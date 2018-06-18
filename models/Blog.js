const mongoose = require("mongoose");
const { Schema } = mongoose;

// Validate Function to check e-mail length
let titleLengthChecker = title => {
  // Check if e-mail exists
  if (!title) {
    return false; // Return error
  } else {
    // Check the length of e-mail string
    if (title.length < 5 || title.length > 50) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid e-mail
    }
  }
};

// Array of Email Validators
const titleValidators = [
  // First Email Validator
  {
    validator: titleLengthChecker,
    message: "Title must be at least 5 characters but no more than 50"
  }
];

let bodyLengthChecker = body => {
  if (!body) {
    return false;
  } else {
    if (body.length < 5 || body.length > 640) {
      return false;
    } else {
      return true;
    }
  }
};

const bodyValidators = [
  {
    validator: bodyLengthChecker,
    message: "Conent body must be 5 characters but no more than 640"
  }
];

let commentLengthChecker = comment => {
  if (!comment[0]) {
    return false;
  } else {
    if (comment[0].length < 1 || comment[0].length > 200) {
      return false;
    } else {
      return true;
    }
  }
};

const commentValidators = [
  {
    validator: commentLengthChecker,
    message: "Comment must not exceed 200 characters"
  }
];

const blogSchema = new Schema({
  title: { type: String, required: true, validate: titleValidators },
  body: { type: String, required: true, validate: bodyValidators },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now() },
  likes: { type: Number, default: 0 },
  likedBy: { type: Array },
  dislikes: { type: Number, default: 0 },
  dislikedBy: { type: Array },
  comments: [
    {
      comment: { type: String, validate: commentValidators },
      commentator: { type: String }
    }
  ]
});

module.exports = mongoose.model("blogs", blogSchema);
