const express= require('express');
const CityController= require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');


const router= express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destory);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

//airport route
router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destory);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);
router.get('/airport',AirportController.getAll);

module.exports=router;