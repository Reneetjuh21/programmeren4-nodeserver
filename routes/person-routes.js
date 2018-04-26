// 
// Hier de person routes
// 

module.exports = {}

const express = require('express')
const Person = require('../domain/Person')
const PersonController = require('../controllers/person-controller')
let routes = express.Router()

routes.get('/person', PersonController.getAllPersons)

routes.get('/person/:id', PersonController.getPersonById)

routes.post('/person', PersonController.createPerson)

routes.delete('/person/:id', PersonController.deletePersonById)

module.exports = routes