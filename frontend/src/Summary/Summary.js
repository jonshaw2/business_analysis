import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Summary.actions';
import {Link} from 'react-router'

//modal dialog
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class Summary extends React.Component {

  componentDidMount(){
    this.props.getTargets(this.props.summaryInfo.profitMin,
    this.props.summaryInfo.profitMax,
    this.props.summaryInfo.employeeMin,
    this.props.summaryInfo.employeeMax,
    this.props.summaryInfo.filterName,
    this.props.summaryInfo.filterWatch,
    this.props.summaryInfo.filterStatus,
    this.props.summaryInfo.filterFavorite)
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


    let filterbutton = ''
    let filteroptions = ''
    if(this.props.summaryInfo.fil === false){
      filterbutton = <button onClick={()=>this.props.filterToggle(true)}className="SummaryFilter">Show Filter Options</button>
    } else{
      filterbutton = <button onClick={()=>this.props.filterToggle(false)}className="SummaryFilter">Hid Filter Options</button>

      filteroptions =
      <div className="FilterOptionContainer">
        <div className="nameFilterInput">
          Company Name: <input onChange={event=>this.props.filterName(
            event.target.value,
            this.props.summaryInfo.profitMin,
            this.props.summaryInfo.profitMax,
            this.props.summaryInfo.employeeMin,
            this.props.summaryInfo.employeeMax,
            this.props.summaryInfo.filterName,
            this.props.summaryInfo.filterWatch,
            this.props.summaryInfo.filterStatus,
            this.props.summaryInfo.filterFavorite,
            this.props.summaryInfo.companies)} value={this.props.summaryInfo.filterName}type="text" placeholder="Input Company Name Here"/>
        </div>
        <table>
          <tbody>
            <tr>
               <td>Profit (2016):</td>
               <td> <input type="number" onChange={event=>this.props.profitminChange(
                 event.target.value,
                 this.props.summaryInfo.profitMin,
                 this.props.summaryInfo.profitMax,
                 this.props.summaryInfo.employeeMin,
                 this.props.summaryInfo.employeeMax,
                 this.props.summaryInfo.filterName,
                 this.props.summaryInfo.filterWatch,
                 this.props.summaryInfo.filterStatus,
                 this.props.summaryInfo.filterFavorite,
                 this.props.summaryInfo.companies)} value={this.props.summaryInfo.profitMin} placeholder="min"/></td>
              <td><input type="number" onChange={event=>this.props.profitmaxChange(
                event.target.value,
                this.props.summaryInfo.profitMin,
                this.props.summaryInfo.profitMax,
                this.props.summaryInfo.employeeMin,
                this.props.summaryInfo.employeeMax,
                this.props.summaryInfo.filterName,
                this.props.summaryInfo.filterWatch,
                this.props.summaryInfo.filterStatus,
                this.props.summaryInfo.filterFavorite,
                this.props.summaryInfo.companies)} value={this.props.summaryInfo.profitMax} placeholder="max"/></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
               <td>Employee:</td>
               <td><input type="number" onChange={event=>this.props.employeeminChange(
                 event.target.value,
                 this.props.summaryInfo.profitMin,
                 this.props.summaryInfo.profitMax,
                 this.props.summaryInfo.employeeMin,
                 this.props.summaryInfo.employeeMax,
                 this.props.summaryInfo.filterName,
                 this.props.summaryInfo.filterWatch,
                 this.props.summaryInfo.filterStatus,
                 this.props.summaryInfo.filterFavorite,
                 this.props.summaryInfo.companies)} value={this.props.summaryInfo.employeeMin} placeholder="min"/></td>
              <td><input type="number" onChange={event=>this.props.employeemaxChange(
                event.target.value,
                this.props.summaryInfo.profitMin,
                this.props.summaryInfo.profitMax,
                this.props.summaryInfo.employeeMin,
                this.props.summaryInfo.employeeMax,
                this.props.summaryInfo.filterName,
                this.props.summaryInfo.filterWatch,
                this.props.summaryInfo.filterStatus,
                this.props.summaryInfo.filterFavorite,
                this.props.summaryInfo.companies)} value={this.props.summaryInfo.employeeMax} placeholder="max"/></td>
            </tr>
          </tbody>
        </table>
        <div id="filterSelect">
          Watch:<select value={this.props.summaryInfo.filterWatch} onChange={event=>this.props.filterWatch(
            event.target.value,
            this.props.summaryInfo.profitMin,
            this.props.summaryInfo.profitMax,
            this.props.summaryInfo.employeeMin,
            this.props.summaryInfo.employeeMax,
            this.props.summaryInfo.filterName,
            this.props.summaryInfo.filterWatch,
            this.props.summaryInfo.filterStatus,
            this.props.summaryInfo.filterFavorite,
            this.props.summaryInfo.companies)}>
            <option value="any">any</option>
            <option value="Y">Y</option>
            <option value="N">N</option>
          </select>
        </div>
        <div id="filterSelect">
          Favorite:<select value={this.props.summaryInfo.filterFavorite} onChange={event=>this.props.filterFavorite(
            event.target.value,
            this.props.summaryInfo.profitMin,
            this.props.summaryInfo.profitMax,
            this.props.summaryInfo.employeeMin,
            this.props.summaryInfo.employeeMax,
            this.props.summaryInfo.filterName,
            this.props.summaryInfo.filterWatch,
            this.props.summaryInfo.filterStatus,
            this.props.summaryInfo.filterFavorite,
            this.props.summaryInfo.companies)}>
            <option value="any">any</option>
            <option value="Y">Y</option>
            <option value="N">N</option>
          </select>
        </div>
        <div id="filterSelect">
          Status:<select value={this.props.summaryInfo.filterStatus} onChange={event=>this.props.filterStatus(
            event.target.value,
            this.props.summaryInfo.profitMin,
            this.props.summaryInfo.profitMax,
            this.props.summaryInfo.employeeMin,
            this.props.summaryInfo.employeeMax,
            this.props.summaryInfo.filterName,
            this.props.summaryInfo.filterWatch,
            this.props.summaryInfo.filterStatus,
            this.props.summaryInfo.filterFavorite,
            this.props.summaryInfo.companies)}>
            <option value="any">any</option>
            <option value="researching">Researching</option>
            <option value="pending approval">Pending Approval</option>
            <option value="approved">Approved</option>
            <option value="declined">Declined</option>
          </select>
        </div>
        <div>
          <button onClick={(event)=>{this.props.resetFilter(this.props.summaryInfo.companies);}}>Reset</button>
        </div>
      </div>
    }







    if (this.props.summaryInfo.companies.length !== this.props.summaryInfo.companyCount){
      this.props.getTargets2(this.props.summaryInfo.profitMin,
      this.props.summaryInfo.profitMax,
      this.props.summaryInfo.employeeMin,
      this.props.summaryInfo.employeeMax,
      this.props.summaryInfo.filterName,
      this.props.summaryInfo.filterWatch,
      this.props.summaryInfo.filterStatus,
      this.props.summaryInfo.filterFavorite)
    }
    let companies = '';
    let companiesFilter = '';
      if (this.props.summaryInfo.companies.length > 0){
        companiesFilter = this.props.summaryInfo.companyFilter;



        companies = companiesFilter.map((companyInfo,idx) =>
          <tr key={companyInfo.id}>
            <td><button onClick={(event)=>{this.props.watchChange(companyInfo.watch,idx, companyInfo.id);}}>{companyInfo.watch}</button></td>
            <td>{companyInfo.name}</td>
            <td><button onClick={(event)=>{this.props.favoriteChange(companyInfo.favorite,idx, companyInfo.id);}}>{companyInfo.favorite}</button></td>
            <td>{companyInfo.lastgrossprofit}</td>
            <td>{companyInfo.employee}</td>
            <td>
              <select name="status" value={companyInfo.status} onChange={event=>this.props.statusChange(event.target.value, idx, companyInfo.id)}>
                <option value="researching">Researching</option>
                <option value="pending approval">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
              </select>
            </td>
            <td><div onClick={this.handleClick}> <button onClick={(event)=>{this.props.viewContact(idx);}}>View</button>
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose}>
                  <span><h1>{this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].name}</h1></span>
                  <h2>Contacts</h2>
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

            <td>
              <Link className="imageAndName" to={"/summary/detail/" + companyInfo.id}>
                <button>Click Me</button>
              </Link>
            </td>
            <td><button className="cellButton" onClick={(event)=>{this.props.edit(idx);}}>Edit</button></td>
            <td><div onClick={this.handleClick2}> <button onClick={(event)=>{this.props.viewContact(idx);}}>Delete</button>
            {
              this.state.isShowingModal2 &&
              <ModalContainer onClose={this.handleClose2}>
                <ModalDialog onClose={this.handleClose2}>
                  <h1>Confirm Delete</h1>
                  {this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].name} <br/><br/>
                  <button onClick={(event)=>{this.props.deleteContact(this.props.summaryInfo.companies[this.props.summaryInfo.viewIndex].id);this.handleClose2()}}>Confirm</button>
                </ModalDialog>
              </ModalContainer>
            }
            </div></td>
          </tr>
        )

    }


    return (
      <div id="summaryCanvas">
        <h1>Company Summary Page</h1>
        <button id="comparisonDirectButton" onClick={(event)=>{this.props.redirectCompare()}}>Comparison Summary</button>
        {filterbutton}
        {filteroptions}
        <div id="summaryTableCanvas">
          <table id="company_table">
            <tbody>
              <tr>
                <th>W</th>
                <th>Name</th>
                <th>Favorite</th>

                <th>Profit(2016)</th>
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
