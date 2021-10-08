import citiesModel from "../model/citiesModel.js";

const getCitiesCodes = (req, res, next) => {
    const codes = citiesModel.getCitiesCodes();
    res.json(codes);
}

export default {
    getCitiesCodes,
}