import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './CreateTarget.action';

class CreateTarget extends React.Component {
  render() {
    return (
      <div id="create_company">
        <div>
        <h2>Create Company Info!</h2>
        <label>Company Name: </label>
        <input value="something"/>

        <label>Industry: </label>
        <input value="something"/>

        <label>Gross Profit (2016): </label>
        <input value="something"/>

        <label>Total Assets: </label>
        <input value="something"/>

        <label>Employee: </label>
        <input value="something"/>

        <h4>Quarterly Profit</h4>
        <label>First Quarter Profit:</label>
        <input value="something"/>

        <label>Second Quarter Profit:</label>
        <input value="something"/>

        <label>Third Quarter Profit:</label>
        <input value="something"/>

        <label>Fourth Quarter Profit:</label>
        <input value="something"/>

        <h4>Contacts:</h4>
        <label>Name</label>
        <input value="something"/>

        <label>Phone:</label>
        <input value="something"/>

        <label>Email:</label>
        <input value="something"/>

        <label>Title:</label>
        <input value="something"/>
        <button>Add Contact</button>
        <br/><br/><br/>
        <button>Submit</button>

        </div>

      </div>
    );
  }
}

const CreateTargetContainer = ReactRedux.connect(
  state => state.createtarget,
  actions
)(CreateTarget);

export default CreateTargetContainer;
