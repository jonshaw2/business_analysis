const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Promise = require('bluebird');
const pgp = require('pg-promise')();
const config = require('./config/dbconfig')
const db = pgp(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/createtarget', (req, resp, next) => {
  let data = req.body.data;
  console.log('in the backend createtarget')
  db.one(`
    insert into companyinfo values(default, $1, $2, $3, $4, $5, $6, $7, $8) returning *
    `, [data.companyname, data.industry, data.note, data.website, "researching", data.grossprofit, data.totalassets, data.employee])
  .then(function(page){
    let id = page.id;
    console.log(id);
    for (let i = 0; i<data.contact.length; i++){
      if (data.contact[i].name === ''){

      } else{
        db.none(`
          insert into contacts values(default, $1, $2, $3, $4, $5)
        `, [data.contact[i].name,data.contact[i].phone,data.contact[i].email, data.contact[i].title, id])
      }
    }

    return (id)
  }).then(function(id){
    db.none(`
      insert into finance values(default, $1, $2, $3, $4, $5)
    `,[data.firstquarterprofit, data.secondquarterprofit, data.thirdquarterprofit, id, data.fourthquarterprofit])
  }).then(page => resp.json("no error"))
  .catch(next);
})

app.get('/api/getcompanies', (req, resp, next) => {
  var data = {}
  db.any('SELECT * from companyinfo')
    .then(function(companyInfo){
      data.companyInfo = companyInfo;
      db.any(`select * from contacts WHERE active = true`)
      .then(function(contactInfo){
        data.contactInfo = contactInfo;
        db.any(`select * from finance`)
        .then(function(financeInfo){
          data.financeInfo = financeInfo;
          resp.json(data)
        })
      }).catch(next);
    }).catch(next);
})

app.listen(4015, ()=>{
  console.log("listening to 4015...")
})
