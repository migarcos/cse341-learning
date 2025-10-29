const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get('/home', lesson1Controller.homeRoute);
routes.get('/data', lesson1Controller.dataRoute);
routes.get('/', lesson1Controller.indexRoute);

module.exports = routes;