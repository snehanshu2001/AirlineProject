const { CityService,AirportService}=require("../services/index");


const airportService= new AirportService();

 const create= async (req,res)=>{
     try {
         const airport=await airportService.createAirport(req.body);
        return res.status(201).json({
             data:airport,
             success:true,
             Message:"successfully create airport"
             
         })
     } 
     catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create airport",
            err:error
        })
    }
}

const update= async (req,res)=>{
    try {
        const airport=await airportService.updateAirport(req.params.id,req.body);
       return res.status(200).json({
            data:airport,
            success:true,
            Message:"successfully update airport"
            
        })
    } 
    catch (error) {
       console.log(error);
       return res.status(500).json({
           data:{},
           success:false,
           message:"not able to update aiport",
           err:error
       })
   }
}
const get= async (req,res)=>{
    try {
        const airport=await airportService.getAirport(req.params.id);
       return res.status(200).json({
            data:airport,
            success:true,
            Message:"successfully got airport"
            
        })
    } 
    catch (error) {
       console.log(error);
       return res.status(500).json({
           data:{},
           success:false,
           message:"not able to get airport",
           err:error
       })
   }
}
const destory= async (req,res)=>{
    try {
        const airport=await airportService.deleteAirport(req.params.id);
       return res.status(200).json({
            data:airport,
            success:true,
            Message:"successfully deleted airport"
            
        })
    } 
    catch (error) {
       console.log(error);
       return res.status(500).json({
           data:{},
           success:false,
           message:"not able to delete airport",
           err:error
       })
   }
}
const getAll= async (req,res)=>{
    try {
        const airport=await airportService.getAllAirport(req.query);
       return res.status(200).json({
            data:airport,
            success:true,
            Message:"successfully got all airport"
            
        })
    } 
    catch (error) {
       console.log(error);
       return res.status(500).json({
           data:{},
           success:false,
           message:"not able to get all airport",
           err:error
       })
   }
}

module.exports={
    create,
    update,
    get,
    destory,
    getAll
}