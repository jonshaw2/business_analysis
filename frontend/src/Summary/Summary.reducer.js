const INITIAL_STATE = {
  companies: [],
  viewIndex: 0,
  editInfo: {}
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {

  if (action.type==="initializeTables"){
    return Object.assign({}, state, {
      companies: action.payload
    })
  } else if(action.type==="contactIdx"){
    return Object.assign({}, state,{
      viewIndex: action.idx
    })
  } else if(action.type==="editInfo"){
    return Object.assign({}, state,{
      editInfo: state.companies[action.idx]
    })
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
