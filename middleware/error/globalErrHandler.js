const globalErrHandler= (err,req,res,next)=>{
    console.log(err.statusCode);
    // console.log(err.message)
   // status code // 404
   const statusCode=err.statusCode || 500;
   // status: 'failed' or 'success'
   const status=err.message;
   // actual message 
   const message=err.message;





   res.status(statusCode).json({
    status,
    message,
    stack:err.stack,
   });


};


module.exports=globalErrHandler;