const express = require("express");
const axios = require('axios');
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/data", async (req, res)=>{
    const userData = req.body; 
    const url = 'https://gpt-api.richexplorer.com/api/general';
    const data = userData;

    axios.post(url, data)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
})

app.listen(4500, () => {
    console.log("Port running at 4500");
})