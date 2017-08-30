import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './GroupCompare.actions';

//fusion chart
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

//initialize charts
charts(FusionCharts)

//react-linechart
import LineChart from 'react-linechart';
// import '../node_modules/react-linechart/dist/styles.css';

class GroupCompare extends React.Component {
  componentDidMount(){
    this.props.getList(this.props.summaryInfo.companyFilter, this.props.summaryInfo.companies)
  }
  render() {

    let companyData = this.props.GroupCompare.companyList
    let filterCompanyData = this.props.GroupCompare.filterCompanyList
    let companyList = ''
    let graph=''
    let data = []

    if (this.props.GroupCompare.filtered === true){
      data = filterCompanyData
      if (filterCompanyData.length > 0){

        companyList = filterCompanyData.map((companyInfo, idx) =>
          <div key={idx}>
            {companyInfo.name}
            <button>
              Watch On
            </button>
          </div>
        )


      } else{
          companyList =
          <div>
            No Companies Found
          </div>
          }

    } else{
      data = companyData
      if (companyData.length > 0){

        companyList = companyData.map((companyInfo, idx) =>
          <div>
            {companyInfo.name}
            <button>
              Watch On
            </button>
          </div>
      )

    } else{
        companyList =
        <div>
          No Companies Found
        </div>
      }
    }
    //initialize graph
    //last year profit graph
    if(this.props.GroupCompare.graph === "lastyearprofit"){

      var info = []
      for(let i = 0; i<data.length; i++){
        info.push({label: data[i].name, value: data[i].lastgrossprofit})
      }

      let chartData = {
        chart: {
          caption: "Last Year Gross Profit",
          subCaption: ""
        },
        data: info
      };
      graph =    <div className="GraphBox">
                  <ReactFC
                  type="Column2D"
                  renderAt="compareGraph"
                  width= "100%"
                  height= "100%"
                  className="fc-column2d"  // ReactJS attribute-name for DOM classes
                  dataFormat="JSON"
                  dataSource={chartData}/>
                </div>
    } else if(this.props.GroupCompare.graph === "totalassets"){
      //total assets graph
      var info = []
      for(let i = 0; i<data.length; i++){
        info.push({label: data[i].name, value: data[i].totalassets})
      }
      let chartData = {
        chart: {
          caption: "Total Assets",
          subCaption: ""
        },
        data: info
      };
      graph =    <div className="GraphBox">
                  <ReactFC
                  type="Column2D"
                  renderAt="compareGraph"
                  width= "100%"
                  height= "100%"
                  className="fc-column2d"  // ReactJS attribute-name for DOM classes
                  dataFormat="JSON"
                  dataSource={chartData}/>
                </div>
    } else if(this.props.GroupCompare.graph==="quarter"){


    }


    return (
      <div>
        <button onClick={(event)=>{this.props.backButton()}}>Back</button>
        <div id="compareContainer">
          <div id="compareListContainer">
            <div id="compareListButton">
              <button>Filered</button>
              <button>Not Filtered</button>
            </div>
            <div id="compareListEntry">
              {companyList}
            </div>

          </div>
          <div id="graphContainer">
            <div id="graphOption">
              <button onClick={(event)=>{this.props.changeGraph("lastyearprofit")}}>Last Year Profit</button>
              <button onClick={(event)=>{this.props.changeGraph("totalassets")}}>Assets</button>
              <button onClick={(event)=>{this.props.changeGraph("quarter")}}>Quarterly Profit</button>
            </div>
            <div id="compareGraph">
              {graph}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const GroupCompareContainer = ReactRedux.connect(
  state => ({
  GroupCompare: state.groupcompare,
  summaryInfo: state.summaryInfo,
  }),
  actions
)(GroupCompare);

export default GroupCompareContainer;
