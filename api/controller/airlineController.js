import airlinesModel from '../model/airlinesModel.js';

const getAirlineCodes = (req, res, next) => {
    const codes = airlinesModel.getAirlinesCodes();
    res.json(codes);
}

export default {
    getAirlineCodes,
}