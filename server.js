const express = require('express');
const app = express();
const dotenv = require('dotenv'); 

dotenv.config({path:'.env'});

const PORT = process.env.PORT || 8080
app.get('/',(req,res)=>{
    res.send('crus');
})
app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})