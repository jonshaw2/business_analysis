import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './EditTarget.action';

class EditTarget extends React.Component {

  componentDidMount() {
    this.props.initialize(this.props.summaryInfo.editInfo);
  }

  render() {
    console.log(this.props.EditTarget.companyname);
    let info = {
      companyname: this.props.EditTarget.companyname,
      industry: this.props.EditTarget.industry,
      grossprofit: this.props.EditTarget.grossprofit,
      totalassets: this.props.EditTarget.totalassets,
      employee: this.props.EditTarget.employee,
      website:  this.props.EditTarget.website,
      firstquarterprofit:  this.props.EditTarget.firstquarterprofit,
      secondquarterprofit:  this.props.EditTarget.secondquarterprofit,
      thirdquarterprofit:  this.props.EditTarget.thirdquarterprofit,
      fourthquarterprofit:  this.props.EditTarget.fourthquarterprofit,
      contact:  this.props.EditTarget.contact,
      note: this.props.EditTarget.notes,
      id: this.props.summaryInfo.editInfo.id
      }


    return (
      <div id="create_company">
        <div>
        <h2>Edit Company Info!</h2>
        <label>Company Name: </label>
        <input type="text" value={this.props.EditTarget.companyname} onChange={event=>this.props.companyNameChange(event.target.value)}/>


        <label>Industry: </label>
        <input type="text" value={this.props.EditTarget.industry}
         onChange={event=>this.props.industryChange(event.target.value)}/>

        <label>Company Website:</label>
        <input type="text" value={this.props.EditTarget.website} onChange={event=>this.props.websiteChange(event.target.value)}/>

        <label>Gross Profit (2016): </label>
        <input type="number" value={this.props.EditTarget.grossprofit} onChange={event=>this.props.grossProfitChange(event.target.value)}/>

        <label>Total Assets: </label>
        <input type="number" value={this.props.EditTarget.totalassets} onChange={event=>this.props.totalAssetsChange(event.target.value)}/>

        <label>Employee: </label>
        <input type="number" value={this.props.EditTarget.employee} onChange={event=>this.props.employeeChange(event.target.value)}/>

        <label>Notes:</label>
        <textarea rows="4" cols="50" value={this.props.EditTarget.notes}
        onChange={event=>this.props.notesChange(event.target.value)}/>


        <h4>Quarterly Profit</h4>
        <label>First Quarter Profit:</label>
        <input type="number" value={this.props.EditTarget.firstquarterprofit} onChange={event=>this.props.firstQuarterProfitChange(event.target.value)}/>

        <label>Second Quarter Profit:</label>
        <input type="number" value={this.props.EditTarget.secondquarterprofit} onChange={event=>this.props.secondQuarterChange(event.target.value)}/>

        <label>Third Quarter Profit:</label>
        <input type="number" value={this.props.EditTarget.thirdquarterprofit} onChange={event=>this.props.thirdQuarterChange(event.target.value)}/>

        <label>Fourth Quarter Profit:</label>
        <input type="number" value={this.props.EditTarget.fourthquarterprofit} onChange={event=>this.props.fourthQuarterChange(event.target.value)}/>

        <h4>Contacts:</h4>

        {this.props.EditTarget.contact.map((contact, idx) =>
          <div key={idx}>
            <span>Contact {idx+1} :</span><br/>
            <label>Name</label>
            <input type="text" value={contact.contact_name} onChange={(event)=>this.props.contactNameChange(event.target.value,idx)}/>

            <label>Phone:</label>
            <input type="text" value={contact.contact_phone} onChange={event=>this.props.contactPhoneChange(event.target.value,idx)}/>

            <label>Email:</label>
            <input type="text" value={contact.contact_email} onChange={event=>this.props.contactEmailChange(event.target.value,idx)}/>

            <label>Title:</label>
            <input type="text" value={contact.contact_title} onChange={event=>this.props.contactTitleChange(event.target.value,idx)}/>

            <br/><br/>
          </div>

        )}


        <button onClick={this.props.addContact}>Add Another Contact</button><button onClick={this.props.removeContact}>Remove Contact</button>
        <br/><br/><br/>

        <button onClick={()=>this.props.editTarget(info)}>Submit</button>

        </div>

      </div>
    );
  }
}

const EditTargetContainer = ReactRedux.connect(
  state => ({
  EditTarget: state.edittarget,
  summaryInfo: state.summaryInfo,
  }),
  actions
)(EditTarget);

export default EditTargetContainer;
