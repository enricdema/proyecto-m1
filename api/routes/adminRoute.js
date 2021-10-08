import Router from "express";

adminRoute= new Router();

adminRoute.route('/admin')
    .get(adminController.getAllUsers);

adminRoute.route('/admin/:id')
    .delete(adminController.deleteUser);

export default adminRoute;