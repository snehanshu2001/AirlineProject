
const db =require("../models/index");

class cityRepository{
    async createCity({name}){
        try{
            const city= await db.city.create({name});
            return city;
        }catch(error){
            console.log('catch block ran: ', error);
        }
    }
    async deleteCity(cityId){
        try{
           await db.city.destroy({
               where:{
                   id:cityId,
               }
           });
        } catch(error){
          
            console.log('catch block ran: ', error);
          
        }

    }
}
module.exports = cityRepository;