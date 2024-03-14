// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema =  mongoose.Schema({
//     name: { type: String, required: true },
//     email:{type:String,required:true,unique:true},
//     password:{type:String,required:true},
//     pic:{type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F67413325654311945%2F&psig=AOvVaw3tJd4f4n2XU8w8LZ9k7tZG&ust=1626831302953000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjE3bKZqfECFQAAAAAdAAAAABAD"},
//     isAdmin:{type:Boolean,default:false},
// },{
//     timestamps:true,
// });

// userSchema.methods.matchPassword=async function(enteredPassword){
//    return await bcrypt.compare(enteredPassword,this.password);
// }




// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')){
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password,salt);
// });

// const User = mongoose.model("User",userSchema);

// module.exports = User;