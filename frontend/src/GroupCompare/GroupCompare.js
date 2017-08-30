import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './GroupCompare.actions';

class GroupCompare extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

const GroupCompareContainer = ReactRedux.connect(
  state => ({
  GroupCompare: state.groupcompare,
  }),
  actions
)(GroupCompare);

export default GroupCompareContainer;
