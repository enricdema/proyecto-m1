import Router from "express";

airlineRoute= new Router();

airlineRoute.route('/airline')
    .get(airlineController.getCodes);


export default airlineRoute;