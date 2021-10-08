import fligthPathModel from '../model/flightPathModel.js';

const getFP= (req,res, next)=>{
    const FPS= fligthPathModel.getFlight(req);   
    console.log(FPS);
    res.json(FPS);
}

export default {getFP};