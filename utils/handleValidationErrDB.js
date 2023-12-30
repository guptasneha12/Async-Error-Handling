const AppErr = require("./AppErr");



const handleValidationErrDB=(err)=>{
    // console.log(err);

    const errors=Object.values(err.errors).map(el=>el.message);
    const message=`Invalid input data. ${errors.join(".")}`;
    return new AppErr(message,400);

};

module.exports=handleValidationErrDB;