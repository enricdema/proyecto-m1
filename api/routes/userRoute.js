import Router from "express";
import userController from'../controller/userController.js'


const userRoute= new Router();

userRoute.route('/register')
    .post(userController.register); 

userRoute.route('/login')
     .post(userController.login);
     
userRoute.route('/flightpaths')
     .post(userController.saveroute); 
userRoute.route('/flightpaths')
     .get(userController.checkroute); 
userRoute.route('/flightpaths')
     .delete(userController.deleteroute); 
export default userRoute;