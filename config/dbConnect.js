const mongoose=require("mongoose");

// connect to mongodb using async await

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://guptasneha2003sg:9wmrtFPpLpPMSLkI@cluster0.abefykx.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
};
connectDB();

