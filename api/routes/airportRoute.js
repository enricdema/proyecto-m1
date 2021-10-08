import Router from "express";
import airportController from "../controller/airportController.js";

const airportRoute = new Router();

airportRoute.route('/airports')
    .get(airportController.getAirportCodes);


export default airportRoute;