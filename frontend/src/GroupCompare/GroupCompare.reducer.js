const INITIAL_STATE = {
  // put properties you need here
  companyList : [],
  filterCompanyList: [],
  filtered: true,
  graph: 'totalassets'
};

export default function reducer(state = INITIAL_STATE, action) {
  // add if statements to catch specific actions
  // to return different new state from previous state
  if (action.type==="initiateList"){
    console.log(action.data);
    return Object.assign({}, state, {
      companyList: action.data,
      filterCompanyList: action.filterData
    })
  } else if(action.type==="changeGraph"){
    console.log(action.data);
    return Object.assign({}, state, {
      graph: action.data
    })
  }
  return state;
}
