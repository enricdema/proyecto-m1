import User from '../model/userModel.js'
import HttpError from 'http-errors'
import countriesController from './countriesController.js';

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

const saveroute = (req,res,next) =>{
    try {
        const body=req.body;
        if(!body){
            next(HttpError(400,{message: 'Invalid routes'}))
        }
        else{
            User.saveRoute(body);
            res.status(201).json(body);
        }
    } catch (error) {
        next(HttpError(400,{message: 'Invalid routes'}))
        
    }
}
const checkroute = (req,res,next) =>{
    try {
            const body=User.checkroute();
            res.status(201).json(body);
        
    } catch (error) {
        next(HttpError(400,{message: 'Invalid routes'}))
        
    }
}
const deleteroute = (req,res,next) =>{
    try {
        const body=req.body;
        if(!body){
            next(HttpError(400,{message: 'Invalid routes TO DELETE'}))
        }
        else{
            User.deleteroute(body);
            res.status(201).json(body);
        }
    } catch (error) {
        next(HttpError(400,{message: 'Invalid routes'}))
        
    }
}

export default{register,login,saveroute,checkroute,deleteroute};