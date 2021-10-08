import Router from "express";

countriesRoute= new Router();

countriesRoute.route('/countries')
    .get(countriesController.getCountriesCodes);


export default countriesRoute;