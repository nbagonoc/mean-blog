const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

// Validate Function to check e-mail length
let emailLengthChecker = email => {
  // Check if e-mail exists
  if (!email) {
    return false; // Return error
  } else {
    // Check the length of e-mail string
    if (email.length < 5 || email.length > 30) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid e-mail
    }
  }
};

let validEmailChecker = email => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regExp.test(email);
  }
};

// Array of Email Validators
const emailValidators = [
  // First Email Validator
  {
    validator: emailLengthChecker,
    message: "E-mail must be at least 5 characters but no more than 30"
  },
  // Second Email Validator
  {
    validator: validEmailChecker,
    message: "Must be a valid e-mail"
  }
];

let usernameLengthChecker = username => {
  if (!username) {
    return false;
  } else {
    if (username.length < 5 || username.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};

const usernameValidators = [
  {
    validator: usernameLengthChecker,
    message: "username must be 5 characters but no more than 15"
  }
];

let passwordLengthChecker = password => {
  if (!password) {
    return false;
  } else {
    if (password.length < 6 || password.length > 35) {
      return false;
    } else {
      return true;
    }
  }
};

const passwordValidators = [
  {
    validator: passwordLengthChecker,
    message: "password must be 6 characters but not more thatn 35"
  }
];

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: emailValidators
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: usernameValidators
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidators
  }
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("users", userSchema);
