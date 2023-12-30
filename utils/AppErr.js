// using function

// const appErr=(message,statusCode)=>{
//     const error=new Error(message);
//     error.statusCode=statusCode;
//     return error;
// };




// using class
class AppErr extends Error{
    // this constructor function is called when an object is created from this class
    constructor(message,statusCode){
super(message);
this.statusCode=statusCode;
    }
}



// module.export=appErr;
module.exports=AppErr;