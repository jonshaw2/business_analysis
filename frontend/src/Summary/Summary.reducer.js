const INITIAL_STATE = {
  companies: [],
  viewIndex: 0,
  editInfo: {},
  status: "Researching",
  needRender : true
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {

  if (action.type==="initializeTables"){
    let companycount = action.payload.length
    return Object.assign({}, state, {
      companies: action.payload,
      companyCount: companycount

    })
  } else if(action.type==="initializeTables2"){
    return Object.assign({}, state, {
      companies: action.payload,
    })
  } else if(action.type==="contactIdx"){
    return Object.assign({}, state,{
      viewIndex: action.idx
    })
  } else if(action.type==="editInfo"){
    return Object.assign({}, state,{
      editInfo: state.companies[action.idx]
    })
  } else if(action.type==="editStatus"){
      let companiesTemp = state.companies.map(companies=>companies)
      companiesTemp[action.index].status = action.status
      return Object.assign({}, state, {
        companies: companiesTemp
    })
  } else if(action.type==="renderUpdate"){
    console.log('in renderupdate')
    let companyCount = state.companyCount - 1
    console.log(companyCount)
    return Object.assign({}, state, {
      companyCount: companyCount
    })
    return state
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
