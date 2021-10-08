import routes from '../data/routes.js'


class fligthPathModel{

    getFlight(req){
        let origin=req.query.origin;
        let destiny= req.query.destiny;
        return routes.filter(element => element.departure_airport_iata==origin && element.arrival_airport_iata==destiny);
    }

}

export default new fligthPathModel();