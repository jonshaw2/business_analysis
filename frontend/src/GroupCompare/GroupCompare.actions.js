// import $ from "jquery";
import { hashHistory } from "react-router";
// import BASEURL from "../baseurl";

export function backButton(){
  hashHistory.push('/summary');
  return {type: "nothing"}
}
export function changeGraph(data){
  return {type: "changeGraph", data:data}
}
export function changeFilter(data){
  return {type: "changeFilter", data:data}
}

export function getList(filterData, data){
  return {type: "initiateList",filterData:filterData,  data:data}
}
