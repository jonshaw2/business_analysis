import $ from "jquery";
import { hashHistory } from "react-router";
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
function targetInfo2(data){
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
  return{type: 'initializeTables2', payload: tempData};
}

function targetError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  console.log(error);
}
function updated(){
  console.log('in updated')
  return{type: "renderUpdate"};
}


function statusUpdate(index, status){
  return{type: "editStatus", index:index, status:status};
}

function watchUpdate(index, status){
  return{type: "editWatch", index:index, status:status};
}

function favoriteUpdate(index, status){
  return{type: "editFavorite", index:index, status:status};
}

export function deleteContact(idx){
  console.log('in deleteContact')
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/deletecompany`,
      data: JSON.stringify({
        idx: idx
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    }).then(dispatch(updated()))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}

export function viewContact(idx){
  console.log(idx)
  return{type: 'contactIdx', idx: idx}
}

export function edit(idx){
  hashHistory.push('/edittarget');
  return{type: 'editInfo', idx: idx}
}
export function statusChange(status, index, companyID){
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/statuschange`,
      data: JSON.stringify({
        status: status,
        id: companyID
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    }).then(data => dispatch(statusUpdate(index, status)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}
export function watchChange(status, index, companyID){
  if(status === 'N'){
    status = 'Y'
  } else{
    status = 'N'
  }

  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/watchchange`,
      data: JSON.stringify({
        status: status,
        id: companyID
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(watchUpdate(index, status)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}

export function favoriteChange(status, index, companyID){
  if(status === 'N'){
    status = 'Y'
  } else{
    status = 'N'
  }

  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/favoritechange`,
      data: JSON.stringify({
        status: status,
        id: companyID
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(favoriteUpdate(index, status)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}

export function getTargets(){
  console.log('in getTargets');
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

export function getTargets2(){
  console.log('in getTargets2');
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/getcompanies`,
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(targetInfo2(data)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}
