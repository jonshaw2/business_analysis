import $ from "jquery";
import { hashHistory } from "react-router";
import BASEURL from "../baseurl";

function targetInfo(data, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite){
  console.log(filterName);
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

  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, tempData)

  return{type: 'initializeTables', payload: tempData, companyFilter: companyFilter};
}
function targetInfo2(data, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite){

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
  console.log(filterName,'targetInfo2');
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, tempData)

  return{type: 'initializeTables2', payload: tempData, companyFilter: companyFilter};
}

function targetError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  console.log(error);
}
function updated(){
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
export function redirectCompare(){
  hashHistory.push('/summary/groupcompare');
  return{type: "nothing"};
}

export function deleteContact(idx){
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
export function filterToggle(data){
  return{type: 'filterToggle', data:data}
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

export function profitminChange(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(status, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, companies)
  return{type: "editProfitMin", status:status, companyFilter: companyFilter};
}
export function profitmaxChange(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, status, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, companies)
  return{type: "editProfitMax", status:status, companyFilter: companyFilter};
}
export function employeeminChange(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, status, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, companies)
  return{type: "editEmployeeMin", status:status, companyFilter: companyFilter};
}
export function employeemaxChange(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, status, filterName, filterWatch, filterStatus, filterFavorite, companies)
  return{type: "editEmployeeMax", status:status, companyFilter: companyFilter};
}
export function filterWatch(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, status, filterStatus, filterFavorite, companies)
  return{type: "editFilterWatch", status:status, companyFilter: companyFilter};
}
export function filterFavorite(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, status, companies)
  return{type: "editFilterFavorite", status:status, companyFilter: companyFilter};
}
export function filterStatus(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, status, filterFavorite, companies)
  return{type: "editFilterStatus", status:status, companyFilter: companyFilter};
}
// status, profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite
export function filterName(status, profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite, companies){
  let companyFilter = updateFilter(profitMin, profitMax, employeeMin, employeeMax, status, filterWatch, filterStatus, filterFavorite, companies)

  return{type: "editFilterName", status:status, companyFilter: companyFilter};
}

function updateFilter(profitMin, profitMax, employeeMin, employeeMax, filterName, filterWatch, filterStatus, filterFavorite, companies){
  console.log(employeeMax, 'max')
  console.log(companies);
  console.log('in filter',filterName);
  //filtering profit min
  if(profitMin !== ''){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].lastgrossprofit >= profitMin)
      tempArray.push(companies[i])
    }
    companies = tempArray;

  }
  //filtering profit max
  if(profitMax !== ''){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].lastgrossprofit <= profitMax)
      tempArray.push(companies[i])
    }
    companies = tempArray;

  }
  //filtering employee min
  if(employeeMin !== ''){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].employee >= employeeMin)
      tempArray.push(companies[i])
    }
    companies = tempArray;

  }
  //filtering employee max
  if(employeeMax !== ''){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].employee <= employeeMax)
      tempArray.push(companies[i])
    }
    companies = tempArray;

  }
  //filtering watch status
  if(filterWatch !== 'any'){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].watch === filterWatch)
      tempArray.push(companies[i])
    }
    companies = tempArray;
  }
  //filtering favorite status
  if(filterFavorite !== 'any'){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].favorite === filterFavorite)
      tempArray.push(companies[i])
    }
    companies = tempArray;
  }
  //filtering status status
  if(filterStatus !== 'any'){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].status === filterStatus)
      tempArray.push(companies[i])
    }
    companies = tempArray;
  }
  //filtering name
  if(filterName !== ''){
    let tempArray = []
    for(let i = 0; i<companies.length;i++){
      if(companies[i].name.toUpperCase().indexOf(filterName.toUpperCase()) !== -1)
      tempArray.push(companies[i])
    }
    console.log(companies);
    companies = tempArray;

  }


  return companies
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

export function getTargets(profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite){
  let profitMins = profitMin;
  let profitMaxs = profitMax;
  let employeeMins = employeeMin;
  let employeeMaxs = employeeMax;
  let filterNames = filterName;
  let filterWatchs = filterWatch;
  let filterStatuss = filterStatus;
  let filterFavorites = filterFavorite;
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/getcompanies`,
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(targetInfo(data, profitMins, profitMaxs, employeeMins, employeeMaxs, filterNames,filterWatchs, filterStatuss, filterFavorites)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}

export function getTargets2(profitMin, profitMax, employeeMin, employeeMax, filterName,filterWatch, filterStatus, filterFavorite){
  let profitMinss = profitMin;
  let profitMaxss = profitMax;
  let employeeMinss = employeeMin;
  let employeeMaxss = employeeMax;
  let filterNamess = filterName;
  console.log(filterNamess, 'in getTargets2')
  let filterWatchss = filterWatch;
  let filterStatusss = filterStatus;
  let filterFavoritess = filterFavorite;
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/getcompanies`,
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(targetInfo2(data, profitMinss, profitMaxss, employeeMinss, employeeMaxss, filterNamess,filterWatchss, filterStatusss, filterFavoritess)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}
