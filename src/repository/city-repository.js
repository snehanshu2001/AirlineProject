
const db =require("../models/index");

const { City } = require('../models/index');
const { Op } = require("sequelize");
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
            
            const city = await db.city.findByPk(cityId);
            return city;

        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }

    async updateCity(cityId,data){
        try {
    //        const city =await db.city.update(data,{
      //          where:{
     //               id:cityId
     //           }
    //        })

    const city=await db.city.findByPk(cityId);
    city.name=data.name;
    await city.save();
            return city;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async getAllCity(filter){
        try {
            if(filter.name){
                const cities = await db.city.findAll({
                    where : {
                       name:{ [Op.startsWith]:filter.name
                       }
                    }
                });
                return cities;
            }
            else{
            const cities = await db.city.findAll();
            return cities;
            }

            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
}
module.exports = CityRepository;