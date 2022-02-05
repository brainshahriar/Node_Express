const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
});


app.get('/posts',(req,res)=>{
    res.send('bye');
});
const port = 3000;
app.listen(port,(req,res)=>{
    console.log(`App running in port ${port}...`);
});