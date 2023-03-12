const express=require("express");
const bodyParser=require("body-parser");
 
const {PORT}=require('./config/serverconfig')
const CityRepository=require('./repository/city-repository')
const ApiRoutes=require("./routes/index");
const setupAndStartServer=async()=>{
    // create express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT, async ()=>{
        console.log(`server started running on ${PORT}`);
       
   
      

        

        
    }) 

}

setupAndStartServer();