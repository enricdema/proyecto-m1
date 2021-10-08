import Router from "express";

airportRoute= new Router();

airportRoute.route('/airports')
    .get(airportsController.getCodes);


export default airportRoute;