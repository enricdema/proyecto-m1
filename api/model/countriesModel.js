import countries from '../data/countries.js';

class Countries{

    getCountriesCodes(){
        return countries.map(x => x.code);
    }
}

export default new Countries()