import Router from "express";
import countriesController from "../controller/countriesController.js";

const countriesRoute =new Router();

countriesRoute.route('/countries')
    .get(countriesController.getCountriesCodes);


export default countriesRoute;