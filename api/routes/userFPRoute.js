import Router from "express";
import saveRoute from '../controller/userFP/postFP.js'

const userFPRoute= new Router();


// userFPRoute.route('/fligthPathsS')
//     .get(userFPController.getRoutes); 
userFPRoute.route('/flightpaths')
    .post(saveRoute.saveRoute); 
// userFPRoute.route('/fligthPathsS')
//     .delete(userFPController.deleteRoute);  


export default userFPRoute;