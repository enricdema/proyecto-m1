import Router from "express";

fligthPathRoute= new Router();


fligthPathRoute.route('/fligthPaths')
    .get(flightPathController.getRoutes); 


export default fligthPathRoute;