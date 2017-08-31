const INITIAL_STATE = {
  companyname:'',
  industry:'',
  grossprofit:0,
  totalassets:0,
  employee:0,
  website:'',
  notes:'',

  firstquarterprofit:0,
  secondquarterprofit:0,
  thirdquarterprofit:0,
  fourthquarterprofit:0,

  contact:[{
    name: '',
    phone: '',
    email: '',
    title: ''}]
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {
  // add if statements to catch specific actions
  // to return different new state from previous state

  if (action.type === 'companyNameChange'){
    console.log('in action')
    return Object.assign({}, state, {
      companyname: action.companyname
    })
  } else  if (action.type === 'industryChange'){
      console.log('in action')
      return Object.assign({}, state, {
        industry: action.industry
    })
  } else  if (action.type === 'websiteChange'){
      console.log('in action')
      return Object.assign({}, state, {
        website: action.website
    })
  } else  if (action.type === 'grossProfitChange'){
      console.log('in action')
      return Object.assign({}, state, {
        grossprofit: action.grossprofit
    })
  } else  if (action.type === 'totalAssetsChange'){
      console.log('in action')
      return Object.assign({}, state, {
        totalassets: action.totalassets
    })
  } else  if (action.type === 'employeeChange'){
      console.log('in action')
      return Object.assign({}, state, {
        employee: action.employee
    })
  } else if (action.type === 'notesChange'){
      console.log('in action')
      return Object.assign({}, state,{
        notes: action.notes
    })

  } else  if (action.type === 'firstQuarterProfitChange'){
      console.log('in action')
      return Object.assign({}, state, {
        firstquarterprofit: action.firstquarterprofit
    })
  } else  if (action.type === 'secondQuarterChange'){
      console.log('in action')
      return Object.assign({}, state, {
        secondquarterprofit: action.secondquarterprofit
    })
  } else  if (action.type === 'thirdQuarterChange'){
      console.log('in action')
      return Object.assign({}, state, {
        thirdquarterprofit: action.thirdquarterprofit
    })
  } else  if (action.type === 'fourthQuarterChange'){
      console.log('in action')
      return Object.assign({}, state, {
        fourthquarterprofit: action.fourthquarterprofit
    })
  } else  if (action.type === 'contactNameChange'){
      console.log('in action')
      let contactTemp = state.contact.map(contact=>contact)
      contactTemp[action.index].name = action.name
      return Object.assign({}, state, {
        contact: contactTemp
    })
  } else  if (action.type === 'contactPhoneChange'){
      console.log('in action')
      let contactTemp = state.contact.map(contact=>contact)
      contactTemp[action.index].phone = action.phone
      return Object.assign({}, state, {
        contact: contactTemp
    })
  } else  if (action.type === 'contactEmailChange'){
      console.log('in action')
      let contactTemp = state.contact.map(contact=>contact)
      contactTemp[action.index].email = action.email
      return Object.assign({}, state, {
        contact: contactTemp
    })
  } else  if (action.type === 'contactTitleChange'){
      console.log('in action')
      let contactTemp = state.contact.map(contact=>contact)
      contactTemp[action.index].title = action.title
      return Object.assign({}, state, {
        contact: contactTemp
    })
  } else if (action.type === 'addContact'){
      let contactTemp = state.contact.map(contact=>contact)
      contactTemp.push({
        name: '',
        phone: '',
        email: '',
        title: ''
      });
      return Object.assign({}, state,{
        contact: contactTemp
    })
  } else if (action.type === 'removeContact'){
      let contactTemp = state.contact.map(contact=>contact)
      if (contactTemp.length >1){
        contactTemp.pop();
      }
      return Object.assign({}, state,{
        contact: contactTemp
    });
  } else if (action.type==="createTarget"){

    return Object.assign({}, state,{
      companyname:'',
      industry:'',
      grossprofit:0,
      totalassets:0,
      employee:0,
      website:'',
      notes:'',

      firstquarterprofit:0,
      secondquarterprofit:0,
      thirdquarterprofit:0,
      fourthquarterprofit:0,

      contact:[{
        name: '',
        phone: '',
        email: '',
        title: ''
      }]
    })
  }
  return state;
}
