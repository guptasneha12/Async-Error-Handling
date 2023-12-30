const express=require('express');
const AppErr = require('./utils/AppErr');
// const appErr = require('./utils/AppErr');
require("./config/dbConnect");
const Post=require("./model/Post");
const handleValidationErrDB=require("./utils/handleValidationErrDB");
const handleCastErr = require('./utils/handleCastErr');
const globalErrHandler = require('./middleware/error/globalErrHandler');


const app=express();

// to receive the incoming data from express we need to configure express
app.use(express.json());
//POST /posts
app.post('/posts',async(req,res,next)=>{
    try {
        
        const post=await Post.create(req.body);
        res.json(post);
    } catch (error) {
    //    next(new AppErr(error,400));
   next( handleValidationErrDB(error));
    }

});


// GET/ posts/:id
app.get("/posts/:id",async(req,res,next)=>{
    try {
        const post=await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        next(handleCastErr(error));
        
    }
});


//GET 
app.get('/',(req,res,next)=>{
    let networkIsLive=false;
    if(!networkIsLive){
        const err= new AppErr('Network Error',500);
        return next(err);
    }
    res.json({
        message:"Welcome to Error Handling",
    });
});

// GET/ profile
app.get('/profile',(req,res,next)=>{
    let isLogin=false;
    if(!isLogin){
        const err= new AppErr('You are not logged in',401);
        return next(err);    // this is error constructor function
    }
    res.json({
        message:"Welcome to Profile page",
    });
});


// 404 error handling
// app.all is for universal end point
// if any of the route does'nt exit then this message displays
app.all("*",(req,res,next)=>{
//     console.log(req.originalUrl);     // this is the url the user is requesting for
//     res.status(404).json({
// msg:`${req.originalUrl} not Found`,
//     })



const err=new AppErr(`${req.originalUrl} not Found`,404);
next(err);
}) 





// Global error handling middleware to display beautiful error message
// err contains the error that we passed into the next
app.use(globalErrHandler);






// start the server
const port=process.env.PORT || 3000;
const server=app.listen(port,()=>{
    console.log(`Server is started on port ${port}`);
});


process.on('unhandledRejection',(err,promise)=>{
    console.log(`${err.name} ${err.message}`);
})