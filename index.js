const express = require('express');

const morgan = require('morgan');
const app = express();
const tourRouter=require('./routes/tourRoutes')
app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/tours',tourRouter);









const port = 3000;
app.listen(port,(req,res)=>{
    console.log(`App running in port ${port}...`);
});