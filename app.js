import express from 'express';
import fligthPathRoute from './api/routes/fligthPathRoute.js'; 
// import adminRoute from './api/routes/adminRoute.js'
import airlineRoute from './api/routes/airlineRoute.js';
import airportRoute from './api/routes/airportRoute.js'; 
import citiesRoute from './api/routes/citiesRoute.js';
import countriesRoute from './api/routes/countriesRoute.js';
// import userRoute from './api/routes/userRoute.js'; 
// import airlineRoute from './api/routes/airlineRoute.js'
// import airportRoute from './api/routes/airportRoute.js'; 
// import citiesRoute from './api/routes/citiesRoute.js'
// import countriesRoute from './api/routes/countriesRoute.js'
import userRoute from './api/routes/userRoute.js'; 
// import userFPRoute from './api/routes/userFPRoute.js';
//import errorRoute from './route/errorRoutes.js'
//import clientErrorHandle from './middleware/errorHandler.js'


const app = express();
app.use(express.json());

app.use(express.static('views'));

// app.use('/user',userRoute);
app.use('/api',airlineRoute);
app.use('/api',airportRoute);
app.use('/api',citiesRoute);
app.use('/api',countriesRoute);
app.use('/api/user',userRoute);
// app.use('/airlines',airlineRoute);
// app.use('/airports',airportRoute);
// app.use('/cities',citiesRoute);
// app.use('/contries',countriesRoute);
// app.use('/rutasUsuario',userFPRoute);
app.use('/api',fligthPathRoute);
//app.use('/admin',adminRoute);

//app.use('*',errorRoute);
//app.use(clientErrorHandle);


export default app;