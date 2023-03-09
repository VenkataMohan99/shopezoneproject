const express =require('express');
const cors=require('cors');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
// const { raw } = require('express');
const dotenv=require('dotenv');
const path=require('path');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json())
app.listen(9985,()=>{
    console.log("Listening to the port 9985");
})
app.use(express.static(path.join(__dirname, './webclient/build')));
let connection=async()=>{
try{
    await mongoose.connect(`mongodb+srv://Mohan:${process.env.DB_PASSWORD}@cluster0.mzusat2.mongodb.net/shopezone`);
    console.log("Successfully connected to MDB")
}catch(error){
    console.log("Unable to connect to MDB")
}
}
let userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        minLength:[4,"Min Charactors of full name is 4 "],
        maxLength:[20,"Max Charactors of full name is 20"], 
        require:true
    },
    emailId:{
        type:String,
        validate:{
            validator:function (v){
                return /^[A-Za-z0-9-/./_]+\@[A-Za-z0-9-/-/_]+\.([A-za-z]{3,4})$/.test(v);
            }
        },
        message:"Invalid Email Id!",
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
let user=new mongoose.model('userdetails',userSchema);
app.post('/signup',async(req,res)=>{
    console.log(req.body) ;
    let hashedPassword=await bcrypt.hash(req.body.password,6);
    let newUserDetails=async()=>{
     let newUser=new user({
        fullName:req.body.fullName,
        emailId:req.body.emailId,
        password:hashedPassword
     })
     try{
       await newUser.save();
       res.json({
        status:"User Successfully Created"
       })
       console.log("user Created")
     }catch(error){
        res.json({
            status:"Unable to Create new User"
           })
       console.log("Unable to create")

     }
    }
    let data=await user.find({emailId:req.body.emailId});
    console.log(data);
    if(data.length>0){
        res.json({
            status:"User Already Exists"
        })
    }else{
    newUserDetails();
    } 
})
app.post('/login',async(req,res)=>{
    let data=await user.find({emailId:req.body.emailId});
    if(data.length>0){
    let comparePassword=await bcrypt.compare(req.body.password,data[0].password);
    console.log(comparePassword);
     if(comparePassword === true){
        res.json({
            status:"User Successfully Login",
            login:true,
            userDetails:data
        })
     }else{
        res.json({
            status:"Invalid Password!",
            login:false
        })
     }
    }else{
        res.json({
            status:"User Not Found!",
            login:false
        })
    }
})

// let cartShema=new mongoose.Schema({
//     id:Number,
//     count:Number,
//     image:String,
//     title:String,
//     price:Number,
//     useId:String
// })
// let cartItem=new mongoose.model('cartItems',cartShema);
// app.post('/addToCart',async(req,res)=>{
//     let data=await user.find({emailId:req.body.emailId});
//     let saveCartItem=async()=>{
//         let newItem=new cartItem({
//             id:req.body.id,
//             count:req.body.count,
//             image:req.body.image,
//             title:req.body.title,
//             price:req.body.price
//         })
//         try{
//             await newItem.save();
//             res.json({
//                 status:"Product Add to Cart"
//             })
//         }catch(error){
//           res.json({
//             status:"Cart unable to add"
//           })
//         }
//     }
//     saveCartItem();
// })
// app.post('/getUserDetails',async(req,res)=>{
//     let data=await user.find({emailId:req.body.emailId});
//     res.json({
//         data
//     })
// })
connection(); 