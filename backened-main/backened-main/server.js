const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require("cors");
const User=require('./models/User')
const bcrypt=require('bcryptjs')

const app=express()
app.use(cors());
const PORT=3000
app.use(express.json());

app.get('/register',(req,res)=>{
    res.send("Welcome to the MERN stack")
})

app.post('',async(req,res)=>{
    const [username,email,password]=req.body
    try{
            const hashedPassword= await bcrypt.hash(password,20)
            const user=new User({username,email,password:hashedPassword})
            await user.save()

    }
    catch(err){
        console.log(err)
    }
})

app.post('',async(req,res)=>{
    const {email,password}=req.body
    try
    {
        const user =await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
        {
            return res.status(400).json({ message:"Invalid credentials"});
        }
        res.json({ message: "Login Successfull", user,username });
    }
    catch(err)
    {
        console.log(err)
    }
})

mongoose.connect(process.env.MONGO_URL).then(
    console.log("DB connected successfully..")
).catch(
    (err)=>console.log(err)
)


app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :"+PORT)
})

