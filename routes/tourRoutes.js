const express = require('express');
const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const getAlltours = (req,res)=>{
    res.status(200).json({
        status:'success',
        result:tours.length,
        data:{
            tours
        }
    });
}
const getById = (req,res)=>{
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
}
const router = express.Router();


router
.route('/')
.get(getAlltours);

router
.route('/:id')
.get(getById);

module.exports = router;