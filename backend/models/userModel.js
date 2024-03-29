// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const personSchema = mongoose.Schema(
//   {
//     name: { type: "String", required: true },
//     email: { type: "String", unique: true, required: true },
//     password: { type: "String", required: true },
//     pic: {
//       type: "String",
//       required: true,
//       default:
//         "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//     },

//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// personSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// personSchema.pre("save", async function (next) {
//   if (!this.isModified) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// const person = mongoose.model("person", personSchema);

// module.exports = person;
