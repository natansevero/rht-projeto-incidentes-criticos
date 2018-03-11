const express = require('express');
const consig = require('consign');

const app = express();

consig()
    .include('./libs/middlewares.js')
    // .then('./libs/db.js')
    .then('./models')
    .then('./controllers')
    .then('./routes')
    .then('./libs/boot.js')
    .into(app);