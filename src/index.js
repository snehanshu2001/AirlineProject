const express=require("express");
const bodyParser=require("body-parser");
 
const {PORT}=require('./config/serverconfig')
const CityRepository=require('./repository/city-repository')
const ApiRoutes=require("./routes/index");
const {city,airport}=require('./models/index');
const db =require('./models/index');

const setupAndStartServer=async()=>{
    // create express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    app.listen(8000, async ()=>{
        console.log(`server started running on ${PORT}`);

        /*const cities=await city.findAll({
            where:{
                id:9
            },
            include:[{
               model:airport 
            }]
        })
        */
       

        
        
        

       //db.sequelize.sync({alter:true});
      

        

        
    }) 

}

setupAndStartServer();