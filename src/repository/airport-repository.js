
const db =require("../models/index");
const { Op } = require("sequelize");
class AirportRepository{
    async createAirport(data){
        try {
            const airport=await db.airport.create(data);
            return airport;
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }

    async deleteAirport(airportId){
        try {
            await db.airport.destroy({
                where:{
                    id:airportId
                }
            })
            return true;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport=await db.airport.findByPk(airportId);
            airport.name=data.name;
            airport.cityId=data.cityId;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async getAirport(airportId){
        try {
            const airport=await db.airport.findByPk(airportId);
            return airport;
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async getAllAirport(filter){
        try {
            if(filter.name){
                const airport=await db.airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return airport;
            }

            else{
              const airport=await db.airport.findAll();
              return airport;
            }
        } catch (error) {
            console.log('catch block ran: ', error); 
        }
    }
}
module.exports=AirportRepository;