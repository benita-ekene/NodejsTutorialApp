const express = require('express');
const user = require('./UserObject');

const app = express();
app.use(express.json())


//get individual user
app.get('/user/:id', (req, res) => {
 res.json(user.filter(user1 => user1.id === parseInt(req.params.id)))
})

//create users
app.post('/user/create', (req, res) => {
  const newUser = req.body
  user.push(newUser)
  res.json(user)
})


//delete users
app.delete('/user/:id', (req, res) => {
  const deletedUser = user.find(unwantedUser => unwantedUser.id === parseInt(req.params.id))
  if(deletedUser){
    const index = user.indexOf(deletedUser);
    user.splice(index, 1);
    res.json(user) 
  }else{
    res.status(404).send(`Member with the ${req.params.id} not found.`)
  }
})

//update users
app.put('/user/:id', (req, res) => {
  const updatedUser = user.find(userObj => userObj.id === parseInt(req.params.id));
  if (!updatedUser) {
      res.status(404).send(`The customer with id ${req.params.id} was not found`);
  } else {
    updatedUser.name = req.body.name;
    updatedUser.age = req.body.age;
      res.json(user);
  }

})

//Implementing search params

app.get('/user/search', (req, res) => {
  const {id, name, sex} = req.query
  res.status(200).json({
    status: "success",
    message: "message",
    data: {id, name, sex}
    
  })
  
})

app.listen(5000)
 