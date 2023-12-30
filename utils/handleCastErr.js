const AppErr = require("./AppErr");


const handleCastErr=(err)=>{
const error=`Invalid ${err.path}: ${err.value}`;
const message=new AppErr(error,400);
return message;
};

module.exports=handleCastErr;