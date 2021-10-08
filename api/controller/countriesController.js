import countriesModel from "../model/countriesModel.js";

const getCountriesCodes = (req, res, next) => {
    const codes = countriesModel.getCountriesCodes();
    res.json(codes);
}

export default {
    getCountriesCodes,
}