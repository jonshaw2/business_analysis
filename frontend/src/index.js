// Stylesheet
import './index.css';

// Standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

// React Router stuff
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

// import all components and their reducers here
import groupcompareReducer from './GroupCompare/GroupCompare.reducer';
import GroupCompareContainer from './GroupCompare/GroupCompare';
import homeReducer from './home/Home.reducer';
import HomeContainer from './home/Home';
import CreateTargetContainer from './CreateTarget/CreateTarget';
import createtargetReducer from './CreateTarget/CreateTarget.reducer';
import EditTargetContainer from './EditTarget/EditTarget';
import edittargetReducer from './EditTarget/EditTarget.reducer';
import summaryReducer from './Summary/Summary.reducer';
import SummaryContainer from './Summary/Summary';
import singlesummaryReducer from './SingleSummary/SingleSummary.reducer';
import SingleSummaryContainer from './SingleSummary/SingleSummary'

const reducer = Redux.combineReducers({
  // the hello property here corresponds to the
  // state => state.hello line - argument of
  // ReactRedux.connect in hello/Hello.js
  // Use this pattern for each component
  home: homeReducer,
  createtarget: createtargetReducer,
  edittarget: edittargetReducer,
  summaryInfo: summaryReducer,
  singlesummary: singlesummaryReducer,
  groupcompare: groupcompareReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
    return (
      <div id="linkcanvas">
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/summary" activeClassName="active">Summary</Link></li>
          <li><Link to="/createtarget" activeClassName="active">Create Target</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/summary/groupcompare" component={GroupCompareContainer}/>
        <Route path="/summary" component={SummaryContainer}/>
        <Route path="/createtarget" component={CreateTargetContainer}/>
        <Route path="/edittarget" component={EditTargetContainer}/>
        <Route path="/summary/detail/:id" component={SingleSummaryContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
