const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/posts',(req,res)=>{
    res.send('bye');
});

app.listen(3000);