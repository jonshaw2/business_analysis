import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Summary.actions';

class Summary extends React.Component {
  componentDidMount(){
    this.props.getTargets()
  }
  render() {
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
            <td><button>View</button></td>
            <td><button className="cellButton">Click Me</button></td>
            <td><button className="cellButton">Edit</button></td>
            <td><button className="cellButton">Delete</button></td>
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
