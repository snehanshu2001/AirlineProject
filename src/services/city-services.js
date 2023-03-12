const {CityRepository}=require("../repository/index");

class CityService{
    constructor(){
        this.cityRepository= new CityRepository();

    }
    async createCity(data){
      try {
       const city =await this.cityRepository.createCity(data) ;
       return city; 
      } catch (error) {
        console.log('catch block ran: ', error);
      }
    }
    async deleteCity(cityId){
        try {

        const respone =await this.cityRepository.deleteCity(cityId) ;
       return respone; 
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async updateCity(cityId,data){
        try {
        const city =await this.cityRepository.updateCity(cityId,data) ;
       return city; 
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
    async getCity(cityId){
        try {
        const city =await this.cityRepository.getCity(cityId) ;
       return city;
            
        } catch (error) {
            console.log('catch block ran: ', error);
        }
    }
}

module.exports =  CityService;