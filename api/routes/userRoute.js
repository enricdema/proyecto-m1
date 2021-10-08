import Router from "express";

userRoute= new Router();


userRoute.route('/user/:id')
    .get(userController.getUser); 

userRoute.route('/user/register')
    .post(userController.register); 

userRoute.route('/user/login')
    .post(userController.login);


export default userRoute;