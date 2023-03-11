const express=require("express");
const {PORT}=require('./config/serverconfig')

const setupAndStartServer=async()=>{
    // create express object
    const app=express();
   
    app.listen(PORT,()=>{
        console.log(`server started running on ${PORT}`);
        
    })

}

setupAndStartServer();