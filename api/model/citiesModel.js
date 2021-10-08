import cities from '../data/cities.js';

class Cities{

    getCitiesCodes(){
        return cities.map(x => x.code);
    }
}

export default new Cities()