import Router from "express";
import airlineController from "../controller/airlineController.js";

const airlineRoute = new Router();

airlineRoute.route('/airlines')
    .get(airlineController.getAirlineCodes);

export default airlineRoute;