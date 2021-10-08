import User from '../model/userModel.js'
import HttpError from 'http-errors'

const register = (req, res, next) => {
    try{
       
        const body= req.body;
        console.log(body);
        if(!body.username || !body.password){
            next(HttpError(400,{message: 'Invalid username or password'}))
        }
        else{
            const user = {userId:'',username:body.username, password:body.password,rol:"user",routes: [{}]};
            const result= User.create(user);
            console.log(result);
            if(result<0)next(HttpError(400,{message:"The user already exist"}))
            res.status(201).json(result);
        }
    }
    catch(error){
        next(HttpError(400,{message: error.message}))
    }


}

const login = (req, res,next) => {
    const body = req.body;
    if(!body.username || !body.password){
        next(HttpError(400,{message: 'Invalid username or password'}))
    }
    else{
        const user= {username: body.username, password: body.password}
        const result = User.login(user);
        if(result===undefined)
            next(HttpError(400,{message:'error user or password'}))
        else res.status(200).json(result);
    }



}


export default{register,login};