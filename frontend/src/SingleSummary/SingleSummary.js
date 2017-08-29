import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './SingleSummary.actions';

//fusion chart
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

//initialize charts
charts(FusionCharts)

class SingleSummary extends React.Component {
  componentDidMount(){
    this.props.getSummary(this.props.params.id)
  }
  render() {

    let chart = ''

    var chartInfo = []
    let chartData = {}

    console.log('company id',this.props.SingleSummary.companies.id)
    console.log(chartInfo);
    console.log(this.props.SingleSummary);
    if (this.props.SingleSummary.companies !== '' ){
      if (this.props.SingleSummary.companies.id === parseInt(this.props.params.id)){
        chartData = {
            chart: {
              caption: "Quarterly Profit",
              subCaption: ""
            },
            data: [
              {label: "First Quarter",value: this.props.SingleSummary.companies.financeInfo.firstquarterprofit},
              {label: "Second Quarter",value: this.props.SingleSummary.companies.financeInfo.secondquarterprofit},
              {label: "Third Quarter",value: this.props.SingleSummary.companies.financeInfo.thirdquarterprofit},
              {label: "Fourth Quarter",value: this.props.SingleSummary.companies.financeInfo.fourthquarterprofit}]
        };
      } else if (this.props.SingleSummary.companies.id !== this.props.params.id){
        this.props.getSummary(this.props.params.id)
      }

    }

    return (
      <div>
        <h1>{this.props.SingleSummary.companies.name}</h1>
        <div className="SingleSummaryContainer">
          <div className="InformationBox">

            <tr>
              <td>Trading Name:</td>
              <td>{this.props.SingleSummary.companies.name}</td>
            </tr>

            <tr>
              <td>Industry:</td>
              <td>{this.props.SingleSummary.companies.industry}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{this.props.SingleSummary.companies.website}</td>
            </tr>
            <tr>
              <td>Gross Profit (2016):</td>
              <td>{this.props.SingleSummary.companies.lastgrossprofit}</td>
            </tr>
            <tr>
              <td>Total Assets Worth:</td>
              <td>{this.props.SingleSummary.companies.totalassets}</td>
            </tr>
            <tr>
              <td>Number of Employees:</td>
              <td>{this.props.SingleSummary.companies.employee}</td>
            </tr>


          </div>
          <div className="GraphBox">
            <ReactFC
            type = "Column2D"
            className = "fc-column2d"  // ReactJS attribute-name for DOM classes
            dataFormat = "JSON"
            dataSource = {chartData}/>
          </div>

        </div>
        <br/>
        Description:
        <br/>
        {this.props.SingleSummary.companies.description}
      </div>
    );
  }
}

const SingleSummaryContainer = ReactRedux.connect(
  state => ({

  SingleSummary: state.singlesummary,
  }),
  actions
)(SingleSummary);

export default SingleSummaryContainer;
