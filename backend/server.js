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

app.post('/api/edittarget', (req, resp, next) => {
  let data = req.body.data;
  console.log('in the backend edittarget')
  db.one(`
    UPDATE companyInfo
    SET name = $1, industry = $2, description = $3, website = $4, lastgrossprofit = $5, totalassets = $6, employee = $7
    WHERE id = $8 returning *`, [data.companyname, data.industry, data.note, data.website, data.grossprofit, data.totalassets, data.employee, data.id])
  .then(function(page){
    db.none(`UPDATE finance
    SET firstquarterprofit = $1, secondquarterprofit = $2, thirdquarterprofit = $3, fourthquarterprofit = $4
    WHERE company = $5`, [data.firstquarterprofit, data.secondquarterprofit, data.thirdquarterprofit, data.fourthquarterprofit, data.id])
    return(data.id)
  }).then(function(page){

    db.none(`
      DELETE FROM contacts
      WHERE company = $1`, [data.id])

    return(data.id)
  }).then(function(page){

    for (let i = 0; i<data.contact.length; i++){
      console.log(data.contact[i])
      if (data.contact[i].contact_name !== '' && data.contact[i].contact_phone !== '' && data.contact[i].contact_email !== '' && data.contact[i].contact_title !== ''){
        db.none(`
          insert into contacts values(default, $1, $2, $3, $4, $5)
        `, [data.contact[i].contact_name,data.contact[i].contact_phone,data.contact[i].contact_email, data.contact[i].contact_title, data.id])
      }
    }
    return(data.id)
  }).then(page => resp.json("no error"))
    .catch(next);
})

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
app.post('/api/deletecompany', (req, resp, next) => {
  let id = req.body.idx
  db.none(`
    DELETE FROM contacts
    WHERE company = $1`, [id])
  .then(function(){
    db.none(`
    DELETE FROM finance WHERE company = $1`, [id])
  }).then(function(){
    db.none(`
    DELETE FROM companyinfo WHERE id = $1`, [id])
  }).catch(next);
})


app.get('/api/getcompanies', (req, resp, next) => {
  var data = {}
  db.any('SELECT * from companyinfo ORDER BY UPPER(name) ASC;')
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
