import Router from "express";
import citiesController from "../controller/citiesController.js";

const citiesRoute = new Router();


citiesRoute.route('/cities')
    .get(citiesController.getCitiesCodes);


export default citiesRoute;