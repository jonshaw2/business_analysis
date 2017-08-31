const INITIAL_STATE = {
  companies: [],
  viewIndex: 0,
  editInfo: {},
  status: "Researching",
  needRender : true,
  fil: false,
  filterWatch: 'any',
  filterStatus: 'any',
  filterFavorite: 'any',
  profitMin: '',
  profitMax: '',
  employeeMin: '',
  employeeMax: '',
  filterName: '',
  companyFilter: []
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {

  if (action.type==="initializeTables"){
    let companycount = action.payload.length
    return Object.assign({}, state, {
      companies: action.payload,
      companyCount: companycount,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="resetFilter"){
    console.log('in reset filter reducer')
    return Object.assign({}, state, {
      filterWatch: 'any',
      filterStatus: 'any',
      filterFavorite: 'any',
      profitMin: '',
      profitMax: '',
      employeeMin: '',
      employeeMax: '',
      filterName: '',
      companyFilter: action.companyFilter

    })
  } else if(action.type==="filterToggle"){
    return Object.assign({}, state, {
      fil: action.data
    })
  } else if(action.type==="editProfitMin"){
    return Object.assign({}, state, {
      profitMin: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editProfitMax"){
    return Object.assign({}, state, {
      profitMax: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editEmployeeMin"){
    return Object.assign({}, state, {
      employeeMin: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editEmployeeMax"){
    return Object.assign({}, state, {
      employeeMax: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editFilterWatch"){
    return Object.assign({}, state, {
      filterWatch: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editFilterFavorite"){
    return Object.assign({}, state, {
      filterFavorite: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editFilterStatus"){
    return Object.assign({}, state, {
      filterStatus: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="editFilterName"){
    console.log('in name');
    return Object.assign({}, state, {
      filterName: action.status,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="initializeTables2"){
    return Object.assign({}, state, {
      companies: action.payload,
      companyFilter: action.companyFilter
    })
  } else if(action.type==="contactIdx"){
    return Object.assign({}, state,{
      viewIndex: action.idx
    })
  } else if(action.type==="editInfo"){
    return Object.assign({}, state,{
      editInfo: state.companies[action.idx]
    })
  } else if(action.type==="updateFilter"){
    return Object.assign({}, state,{
      companiesFilter: action.status
    })
  } else if(action.type==="editStatus"){
      let companiesTemp = state.companies.map(companies=>companies)
      companiesTemp[action.index].status = action.status
      return Object.assign({}, state, {
        companies: companiesTemp
    })
  } else if(action.type==="editWatch"){
      let companiesTemp = state.companies.map(companies=>companies)
      companiesTemp[action.index].watch = action.status
      return Object.assign({}, state, {
        companies: companiesTemp
    })
  } else if(action.type==="editFavorite"){
      let companiesTemp = state.companies.map(companies=>companies)
      companiesTemp[action.index].favorite = action.status
      return Object.assign({}, state, {
        companies: companiesTemp
    })
  }  else if(action.type==="renderUpdate"){
    console.log('in renderupdate')
    let companyCount = state.companyCount - 1
    console.log(companyCount)
    return Object.assign({}, state, {
      companyCount: companyCount
    })
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
