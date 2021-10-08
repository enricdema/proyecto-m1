import airports from '../data/airports.js';

class Airports {

    getAirportCodes() {
        return airports.map(x => x.code);
    }
}

export default new Airports();