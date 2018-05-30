const express = require('express')
const app = express()
var cors = require('cors')
var jsonObject = require('./../abc.json');

app.use(cors());

app.get('/api/', (req, res) => res.send('Hello World!'));

app.get('/api/json',(req,res) => {
     res.json(jsonObject);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))