import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';

class Home extends React.Component {
  render() {
    return (
      <div id="home_text">
        <h1>Online Business Data Analysis Assistance Tool!</h1>
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
