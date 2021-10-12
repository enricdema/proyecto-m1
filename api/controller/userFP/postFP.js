//import userModel from "../../model/userModel.js";

const saveRoute =(res,req,next)=>{
    console.log(req.body);
    try {
        const body=req.body;
        console.log(body);
        if(!body){
            next(HttpError(400,{message: 'Invalid routes'}))
        }
        else{
            const arrayRoutes = body;
            console.log(arrayRoutes);
           
            res.status(201).json(arrayRoutes);
        }
    } catch (error) {
        next(HttpError(400,{message: 'Invalid routes'}))
        
    }
}

export default {saveRoute};
