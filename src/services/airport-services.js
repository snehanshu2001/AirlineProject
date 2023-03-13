const {CityRepository,AirportRepository}=require("../repository/index");

class AirportService{
    constructor(){
        this.airportRepository=new AirportRepository;
    }

    async getAirport(airportId){
        try {
            const airport=await this.airportRepository.getAirport(airportId);
            return airport;
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport= await  this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    
    async deleteAirport(airportId){
        try {
        const response =await this.airportRepository.deleteAirport(airportId);
        return response;
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async getAllAirport(filter){
        try {
            const response=await this.airportRepository.getAllAirport({name:filter.name});
            return response;
        } catch (error) {
            console.log('catch block ran: ', error);
        
        }
    }
    async createAirport(data){
        try {
            const airport=await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log('catch block ran: ', error);
        
        }
    }
}
module.exports=AirportService;