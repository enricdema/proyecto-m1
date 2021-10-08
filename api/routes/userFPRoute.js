import Router from "express";

userFPRoute= new Router();


userFPRoute.route('/fligthPaths')
    .get(userFPController.getRoutes); 
userFPRoute.route('/fligthPaths')
    .post(userFPController.postRoute); 
userFPRoute.route('/fligthPaths')
    .delete(userFPController.deleteRoute);  


export default userFPRoute;