const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Promise = require('bluebird');
const pgp = require('pg-promise')();
const config = require('./config/dbconfig')
const db = pgp(config);

const app = express();
