const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// const validator = require("validator");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("email is invalid");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("age must be positive number");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.includes("password")) {
//         throw new Error("password can not contain 'password'");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "fg",
//   email: "Raj@a.com",
//   password: "passord",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

//------------------------------------------------task------------------------------------------------------
// const User = mongoose.model("tasks", {
//   Description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   Completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const me = new User({
//   Description: "   hello ",
//   Completed: true,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
