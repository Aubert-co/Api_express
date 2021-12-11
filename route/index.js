const route = require('express').Router();
const ApiAddItens = require('../controller/ApiAdd');
const ApiDelete = require('../controller/ApiDelete');
const ApiUpdate = require('../controller/ApiUpdate');
const ApiFind = require('../controller/ApiFindItem');
const ApiSelect = require('../controller/ApiSelect');



route
.get('/',ApiSelect)
.post('/apiadditem',ApiAddItens)
.post('/apidelete',ApiDelete)
.post('/apiupdate',ApiUpdate)
.post('/apifind',ApiFind)


module.exports  =  route