import airlines from '../data/airlines.js';

class Airlines{

    getAirlinesCodes(){
        return airlines.map(x => x.code);
    }
}

export default new Airlines();