import airportModel from '../model/airportModel.js';

const getAirportCodes = (req, res, next) => {
    const codes = airportModel.getAirportCodes();
    res.json(codes);
}

export default {
    getAirportCodes
}