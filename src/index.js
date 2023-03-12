const express=require("express");
const bodyParser=require("body-parser");
 
const {PORT}=require('./config/serverconfig')
const CityRepository=require('./repository/city-repository')
const setupAndStartServer=async()=>{
    // create express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, async ()=>{
        console.log(`server started running on ${PORT}`);
       
        const repo=new CityRepository;
       const city= repo.deleteCity(5);
      

        

        
    }) 

}

setupAndStartServer();