
const db =require("../models/index");

class CityRepository{
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
           return true;
        } catch(error){
          
            console.log('catch block ran: ', error);
          
        }

    }
    
    async getCity(cityId){
        try {
            const city=await db.city.findOne({
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }

    async updateCity(cityId,data){
        try {
            const city =await db.city.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
}
module.exports = CityRepository;