const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        result:tours.length,
        data:{
            tours
        }
    });
});

app.get('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params);

    const id=req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    res.status(200).json({
        status:'success',
        // result:tours.length,
        data:{
            tour
        }
    });
});

const port = 3000;
app.listen(port,(req,res)=>{
    console.log(`App running in port ${port}...`);
});