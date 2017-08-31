import $ from 'jquery';
import { hashHistory} from 'react-router';
import BASEURL from '../baseurl';

function targetInfo(data){
  let tempData = data.companyInfo;
  tempData.contact = [];
  for (let j = 0; j< data.contactInfo.length;j++){
    if(tempData.id === data.contactInfo[j].company){
      tempData.contact.push(data.contactInfo[j])
    }
  }
  for (let k=0; k< data.financeInfo.length;k++){
    if(tempData.id === data.financeInfo[k].company){
      tempData.financeInfo = data.financeInfo[k];
    }
  }
  console.log(tempData);
  return{type: 'initializeSummary', payload: tempData};
}

function targetError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  console.log(error);
}

export function backButton(){
  hashHistory.push('/summary');
  return {type: "nothing"}
}

export function getSummary(id){
  console.log('in getSummary');
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/getsummary`,
      data: {
        id: id
      },
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(targetInfo(data)))
    .catch(resp => dispatch(targetError(resp)))
  };
  return asyncAction
}
