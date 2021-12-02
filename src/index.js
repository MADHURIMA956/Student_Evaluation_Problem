const express = require('express');

const userController = require('./controllers/users.controller');
const studentController = require('./controllers/students.controller');
const topicController = require('./controllers/evaluations.controller');
const evaluationController = require('./controllers/topics.controller');



const app = express(); 

app.use(express.json());

app.use('/users' ,userController );
app.use('/students' , studentController );
app.use('/topics' ,topicController );
app.use('/evaluations' ,evaluationController );


module.exports = app;

