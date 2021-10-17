const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
   Email : {
     type:"String",
     required:true,
   },
   FullName:{
     type:"String",
     required:true,
   },
   CurrentTime:{
    type:"String",
    required:true,
  },
   password:{
     type:"String",
     required:true,
   },
   tokens:[
     {
       token:{
        type:"String",
        required:true
       }
     }
   ]
  }
)

UserSchema.pre("save",async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12)
  }
  next();
});

UserSchema.methods.generateAuthToken = async function (){
  try{
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  }catch(err){
    console.log(err)
  }
}

const Users =  mongoose.model("User",UserSchema);
module.exports=Users;
