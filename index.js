const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({message:"hello from nodejs"})
})

app.listen(8000,() =>{
    console.log("server is up and running on port 8000");
})