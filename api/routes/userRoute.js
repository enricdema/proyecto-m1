import Router from "express";
import userController from'../controller/userController.js'


const userRoute= new Router();

userRoute.route('/register')
    .post(userController.register); 

userRoute.route('/login')
     .post(userController.login);


export default userRoute;