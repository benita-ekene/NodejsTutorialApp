const express = require('express');
const user = require('./UserObject');

const app = express();

//create route handlers/endpoints to get individual user
app.get('/user/:id', (req, res) => {
 res.json(user.filter(user1 => user1.id === parseInt(req.params.id)))
})

app.post('/user/:name', (req, res) => {
  res.json(user.filter(user1 => user1.name === req.params.name))
})

app.delete('/user/:age', (req, res) => {
  res.json(user.filter(user1 => user1.age === req.params.age))
})

app.put('/user/:sex', (req, res) => {
  res.json(user.filter(user1 => user1.sex === req.params.sex))
})

app.listen(5000)
 