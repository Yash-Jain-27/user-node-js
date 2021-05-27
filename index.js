const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(cors());
app.use(bodyParser.json());

const users = []
app.get('/getUsers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json(users)
})

app.post('/addUser', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const user = req.body.userDetails;
    users.push(user);
    res.json("user addedd");
})

app.listen(3000, () => {
    console.log('connected')
})
