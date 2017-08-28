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
import helloReducer from './hello/Hello.reducer';
import HelloContainer from './hello/Hello';
import homeReducer from './home/Home.reducer';
import HomeContainer from './home/Home';
import CreateTargetContainer from './CreateTarget/CreateTarget'
import createtargetReducer from './CreateTarget/CreateTarget.reducer'

const reducer = Redux.combineReducers({
  // the hello property here corresponds to the
  // state => state.hello line - argument of
  // ReactRedux.connect in hello/Hello.js
  // Use this pattern for each component
  hello: helloReducer,
  home: homeReducer,
  createtarget: createtargetReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/hello" activeClassName="active">Hello</Link></li>
          <li><Link to="/createtarget">Create Target</Link></li>
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
        <Route path="/hello" component={HelloContainer}/>
        <Route path="/createtarget" component={CreateTargetContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
