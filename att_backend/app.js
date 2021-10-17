const express = require('express');
const dotnev = require('dotenv');
const Users = require("./Schema/User");
dotnev.config({ path: './config.env' });
const bcrypt  = require("bcryptjs");
const Food = require('./Schema/FoodSchema');
const jwt =  require("jsonwebtoken");
const authenticate = require("../att_backend/middleware/authenticate")
const cookieparser = require("cookie-parser");
    /// Defining Port Number

require('./DB/conn');


const app = express();

app.use(express.json());
app.use(cookieparser())
app.get('/', (req, res) => {
    res.send('hello from homepage');
});

app.post('/data_send', (req, res) => {
    const { Food_name, Ranking, price, Ingredients,image_url } = req.body;

    // checking is all data, filled or not ?

    if (!Food_name || !Ranking || !price || !Ingredients || !image_url) {
        return res.json({ error: "fill all the details first " })
    }
    /// Checking the food is already there or not ?
   
    Food.findOne({ Food_name: Food_name }).then(alreadyExist => {
        if (alreadyExist) {
            res.json({ Warning: "Food Already Exists" });
        }
        else{
        const food = new Food({ Food_name, Ranking, price, Ingredients,image_url });
        food.save().then(() => {
            res.json({ "Accepted": "Data Created" });
        }).catch(() => {
            res.json({ "Warning": "Data Not Inserted" });
        })}
    }).catch(err => {
        res.json({ Warning: "Not Available, You can add this" })
    })
})


app.post("/register",(req,res)=>{
    const {FullName,Email,password} = req.body;
    if (!FullName || !Email ||!password){
      return res.status(422).json({error:"You need to fill both the details"})
    }
    else{
      const ForTime = new Date();
      const Hours = ForTime.getHours();
      const Minute = ForTime.getMinutes();
      const Seconds = ForTime.getSeconds();
      CurrentTime = Hours + ":"+ Minute + ":" + Seconds;
      Users.findOne({Email:Email}).then(alreadyExist=>{
        if (alreadyExist){
          res.status(422).json({error:"User Already Present"})
        }
        else{
          const user  = new Users({Email,FullName,CurrentTime,password});


          user.save().then(()=>{
            res.json({Accepted:"User Created"})
          }).catch(err=>{
           res.status(422).json({error:"User not created "})
          })
        }
      }).catch(err=>{
        res.json({Warning:"You cannot, create this"})
      })
    }
  })

app.post("/signin", async (req,res)=>{
  try{
  let token;
  const {Email,mypassword} = req.body;
  if (!Email || !mypassword){
    res.status(400).send("please fill the data")
  }
  else{
    const UserLogin =await Users.findOne({Email:Email})
  
    if(!UserLogin){
      res.status(400).json({Message:"Invalid Credentials"})
    }
    else{
      const isMatch = await bcrypt.compare(mypassword,UserLogin.password)
      const token = await UserLogin.generateAuthToken();
      res.cookie("jwtoken",token,{
        expires:new Date(Date.now() + 2592000000),
        httpOnly:true
      });
      if(!isMatch){
        res.status(400).json({Message:"Invalid Credentials"})
      }
      else{
        res.status(200).json({Message:"Found"})
      }
     
    }

  }
}catch(err){
  console.log(err)
}
})
////////// Fetching the data from server
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.get("/my_data", (req, res)=>{
    Food.find({}, (err, list)=>{
      res.json({
        data:list
      })
    })
   })

app.get("/authentication",authenticate,(req,res)=>{
  console.log("will do authentification");  
  res.send(req.rootUser);
  
})
app.get("/getData",authenticate,(req,res)=>{
  res.send(req.rootUser);
  
})
app.get("/logout",(req,res)=>{
 
  res.clearCookie('jwtoken',{path:"/"});
  res.status(200).send("user logout");
})
   //// Defining the port number 
app.listen(process.env.PORT, () => {
    console.log("app runing on this port number", process.env.PORT)
});