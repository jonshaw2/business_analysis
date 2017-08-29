import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Summary.actions';

//modal dialog
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class Summary extends React.Component {

  componentDidMount(){
    this.props.getTargets()
  }

  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

  state = {
    isShowingModal2: false,
  }
  handleClick2 = () => this.setState({isShowingModal2: true})
  handleClose2 = () => this.setState({isShowingModal2: false})


  render() {
    console.log("viewIndex"+this.props.summaryInfo.viewIndex)
    let companies = '';
      if (this.props.summaryInfo.companies.length > 0){
        console.log(this.props.summaryInfo.companies);
        companies = this.props.summaryInfo.companies.map((companyInfo,idx) =>
          <tr key={companyInfo.id}>
            <td>{companyInfo.name}</td>
            <td>{companyInfo.lastgrossprofit}</td>
            <td>{companyInfo.totalassets}</td>
            <td>{companyInfo.employee}</td>
            <td>{companyInfo.status}</td>
            <td><div onClick={this.handleClick}> <button onClick={(event)=>{this.props.viewContact(idx);}}>View</button>
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose}>
                  <h1>Contacts</h1>
                  {this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].contact.map((info, idx2) =>
                    <div key={idx2}>
                    <span className="cellCount">Contact {idx2+1}</span><br/>
                    <span>Name: {info.contact_name}</span><br/>
                    <span>Phone: {info.contact_phone}</span><br/>
                    <span>Email: {info.contact_email}</span><br/>
                    <span>Title: {info.contact_title}</span><br/><br/>
                    </div>
                  )}
                </ModalDialog>
              </ModalContainer>
            }
            </div></td>

            <td><button className="cellButton">Click Me</button></td>
            <td><button className="cellButton" onClick={(event)=>{this.props.edit(idx);}}>Edit</button></td>
            <td><div onClick={this.handleClick2}> <button onClick={(event)=>{this.props.viewContact(idx);}}>Delete</button>
            {
              this.state.isShowingModal2 &&
              <ModalContainer onClose={this.handleClose2}>
                <ModalDialog onClose={this.handleClose2}>
                  <h1>Confirm Delete</h1>
                  {this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].name} <br/><br/>
                  <button onClick={(event)=>{this.props.deleteContact(this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].id)}}>Confirm</button>
                </ModalDialog>
              </ModalContainer>
            }
            </div></td>
          </tr>
        )

    }


    return (
      <div>
        <h1>Company Summary Page</h1>
        <table id="company_table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Profit</th>
              <th>Assets</th>
              <th>Employee</th>
              <th>Status</th>
              <th>Contacts</th>
              <th>Detailed Info</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
              {companies}
          </tbody>
        </table>
      </div>
    );
  }
}

const SummaryContainer = ReactRedux.connect(
  state => ({
    summaryInfo: state.summaryInfo,

}), actions
)(Summary);

export default SummaryContainer;
