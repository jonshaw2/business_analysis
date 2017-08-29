const INITIAL_STATE = {
  companies: ''
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {

  if (action.type==="initializeSummary"){
    return Object.assign({}, state, {
      companies: action.payload,
    })
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
