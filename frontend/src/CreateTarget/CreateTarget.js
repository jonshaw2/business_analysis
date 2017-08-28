import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './CreateTarget.action';

class CreateTarget extends React.Component {
  render() {

    let info = {
      companyname: this.props.companyname,
      industry: this.props.industry,
      grossprofit: this.props.grossprofit,
      totalassets: this.props.totalassets,
      employee: this.props.employee,
      website:  this.props.website,
      firstquarterprofit:  this.props.firstquarterprofit,
      secondquarterprofit:  this.props.secondquarterprofit,
      thirdquarterprofit:  this.props.thirdquarterprofit,
      fourthquarterprofit:  this.props.fourthquarterprofit,
      contact:  this.props.contact,
      note: this.props.notes

    }
    return (
      <div id="create_company">
        <div>
        <h2>Create Company Info!</h2>
        <label>Company Name: </label>
        <input type="text" value={this.props.companyname} onChange={event=>this.props.companyNameChange(event.target.value)}/>


        <label>Industry: </label>
        <input type="text" value={this.props.industry}
         onChange={event=>this.props.industryChange(event.target.value)}/>

        <label>Company Website:</label>
        <input type="text" value={this.props.website} onChange={event=>this.props.websiteChange(event.target.value)}/>

        <label>Gross Profit (2016): </label>
        <input type="number" value={this.props.grossprofit} onChange={event=>this.props.grossProfitChange(event.target.value)}/>

        <label>Total Assets: </label>
        <input type="number" value={this.props.totalassets} onChange={event=>this.props.totalAssetsChange(event.target.value)}/>

        <label>Employee: </label>
        <input type="number" value={this.props.employee} onChange={event=>this.props.employeeChange(event.target.value)}/>

        <label>Notes:</label>
        <textarea rows="4" cols="50" value={this.props.notes}
        onChange={event=>this.props.notesChange(event.target.value)}/>


        <h4>Quarterly Profit</h4>
        <label>First Quarter Profit:</label>
        <input type="number" value={this.props.firstquarterprofit} onChange={event=>this.props.firstQuarterProfitChange(event.target.value)}/>

        <label>Second Quarter Profit:</label>
        <input type="number" value={this.props.secondquarterprofit} onChange={event=>this.props.secondQuarterChange(event.target.value)}/>

        <label>Third Quarter Profit:</label>
        <input type="number" value={this.props.thirdquarterprofit} onChange={event=>this.props.thirdQuarterChange(event.target.value)}/>

        <label>Fourth Quarter Profit:</label>
        <input type="number" value={this.props.fourthquarterprofit} onChange={event=>this.props.fourthQuarterChange(event.target.value)}/>

        <h4>Contacts:</h4>

        {this.props.contact.map((contact, idx) =>
          <div key={idx}>
            <span>Contact {idx+1} :</span><br/>
            <label>Name</label>
            <input type="text" value={contact.name} onChange={(event)=>this.props.contactNameChange(event.target.value,idx)}/>

            <label>Phone:</label>
            <input value={contact.phone} onChange={event=>this.props.contactPhoneChange(event.target.value,idx)}/>

            <label>Email:</label>
            <input type="text" value={contact.email} onChange={event=>this.props.contactEmailChange(event.target.value,idx)}/>

            <label>Title:</label>
            <input type="text" value={contact.title} onChange={event=>this.props.contactTitleChange(event.target.value,idx)}/>

            <br/><br/>
          </div>

        )}


        <button onClick={this.props.addContact}>Add Another Contact</button><button onClick={this.props.removeContact}>Remove Contact</button>
        <br/><br/><br/>

        <button onClick={()=>this.props.createTarget(info)}>Submit</button>

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
