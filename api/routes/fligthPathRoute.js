import Router from "express";
import flightPathController from '../controller/flightPathController.js'

const fligthPathRoute= Router();


fligthPathRoute.route('/fligthPaths')
    .get(flightPathController.getFP); 


export default fligthPathRoute;