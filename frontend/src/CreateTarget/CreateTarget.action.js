import $ from "jquery";
//import { hashHistory } from "react-router";
import BASEURL from "../baseurl";

function targetRedirect(data){
  console.log(data);
  return{
    type: "createTarget"
  }
}

function targetError(resp){
  console.log('error:',resp);
  return;
}

export function createTarget(info){
  console.log('creating object ', info)
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/createtarget`,
      data: JSON.stringify({
        data: info
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch((targetRedirect(data))))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}

export function notesChange(notes){
  return{
    type: "notesChange",
    notes: notes
  }
}

export function addContact(){
  return{
    type: "addContact"
  }
}

export function removeContact(){
  return{
    type: "removeContact"
  }
}
export function companyNameChange(companyname){
  return {
    type: "companyNameChange",
    companyname: companyname
  }
}

export function industryChange(industry){
  return {
    type: "industryChange",
    industry: industry
  }
}

export function websiteChange(website){
  return {
    type: "websiteChange",
    website: website
  }
}

export function grossProfitChange(grossprofit){
  return {
    type: "grossProfitChange",
    grossprofit: grossprofit
  }
}

export function totalAssetsChange(totalassets){
  return {
    type: "totalAssetsChange",
    totalassets: totalassets
  }
}

export function employeeChange(employee){
  return {
    type: "employeeChange",
    employee: employee
  }
}

export function firstQuarterProfitChange(firstquarterprofit){
  return {
    type: "firstQuarterProfitChange",
    firstquarterprofit: firstquarterprofit
  }
}

export function secondQuarterChange(secondquarterprofit){
  return {
    type: "secondQuarterChange",
    secondquarterprofit: secondquarterprofit
  }
}

export function thirdQuarterChange(thirdquarterprofit){
  return {
    type: "thirdQuarterChange",
    thirdquarterprofit: thirdquarterprofit
  }
}

export function fourthQuarterChange(fourthquarterprofit){
  return {
    type: "fourthQuarterChange",
    fourthquarterprofit: fourthquarterprofit
  }
}

export function contactNameChange(name,idx){
  return {
    type: "contactNameChange",
    name: name,
    index: idx
  }
}

export function contactPhoneChange(phone,idx){
  return {
    type: "contactPhoneChange",
    phone: phone,
    index: idx
  }
}

export function contactEmailChange(email,idx){
  return {
    type: "contactEmailChange",
    email: email,
    index:idx
  }
}

export function contactTitleChange(title,idx){
  return {
    type: "contactTitleChange",
    title: title,
    index:idx
  }
}
