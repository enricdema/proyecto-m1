import Router from "express";

userRoute= new Router();


userRoute.route('api/user/:id')
    .get(user); 

userRoute.route('api/user/register')
    .post(userController.register); 


userRoute.route('api/user/login')
    .post(userController.login);


export default userRoute;