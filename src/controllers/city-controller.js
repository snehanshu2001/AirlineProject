const { CityService}=require("../services/index");

const cityService=new CityService();

const create = async(res,req)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"city create successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create city",
            err:error
        })   
     }
}
const get = async(res,req)=>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city get successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get city",
            err:error
        })  
      }
}
const destory = async(res,req)=>{
    try {
        const respone = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"city deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete city",
            err:error
        })  
      }
}
const update = async(res,req)=>{
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city updated successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update city",
            err:error
        })  
      }
}