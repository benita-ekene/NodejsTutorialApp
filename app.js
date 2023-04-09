const express = require('express');
const user = require('./UserObject');

const app = express();

//create route handlers/endpoints
app.get('/user/:id', (req, res) => {
  res.json(user.filter(user1 => user1.id === parseInt(req.params.id)))
})
app.listen(5000)
 