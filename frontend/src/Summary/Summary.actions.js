import $ from "jquery";
//import { hashHistory } from "react-router";
import BASEURL from "../baseurl";

function targetInfo(data){
  let tempData = data.companyInfo;
  for (let i = 0; i< tempData.length; i++){
    tempData[i].contact = [];
    for (let j = 0; j< data.contactInfo.length;j++){
      if(tempData[i].id === data.contactInfo[j].company){
        tempData[i].contact.push(data.contactInfo[j])
      }
    }
    for (let k=0; k< data.financeInfo.length;k++){
      if(tempData[i].id === data.financeInfo[k].company){
        tempData[i].financeInfo = data.financeInfo[k];
      }
    }
  }
  console.log(tempData);
  return{type: 'initializeTables', payload: tempData};
}

function targetError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  console.log(error);
}

export function getTargets(){
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/getcompanies`,
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(targetInfo(data)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}
