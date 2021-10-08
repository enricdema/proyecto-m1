import Router from "express";

citiesRoute= new Router();

citiesRoute.route('/cities')
    .get(citiesController.getCitiesCode);


export default citiesRoute;