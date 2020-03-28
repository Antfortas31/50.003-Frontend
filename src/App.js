import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Level2 from './components/pages/Level2';
import tryme from './components/pages/tryme';
import floorplan from './components/pages/floorplan.png';
import styled from 'styled-components';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import * as algo from './algorithm';
import DisplayBox from './DisplayBox';

// uuid is for generating id's
import * as uuid from 'uuid';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
      testbooth1 : [],
      testbooth2 : [],
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.fileInput = React.createRef();
    this.boothList = [];
    this.boothListCopy = [];
    this.blockList = [];

  }
  

  renderFile = (fileObj) => {
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          dataLoaded: true,
          cols: resp.cols,
          rows: resp.rows
        });
        for (var i = 0; i<this.state.rows.length; i++){
          var Booth = new algo.Booth(this.state.rows[i][0], this.state.rows[i][1], this.state.rows[i][3], this.state.rows[i][6], this.state.rows[i][7]);
          this.boothList.push(Booth);
          this.boothListCopy.push(Booth);
        }
        var block1 = new algo.Block(1);
        var block2 = new algo.Block(2);

        this.blockList.push(block1);
        this.blockList.push(block2);
      }
    }); 
}

fileHandler = (event) => {    
  if(event.target.files.length){
    let fileObj = event.target.files[0];
    let fileName = fileObj.name;

    
    //check for file extension and pass only if it is .xlsx and display error message otherwise
    if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
      this.setState({
        uploadedFileName: fileName,
        isFormInvalid: false
      });
      this.renderFile(fileObj)
    }    
    else{
      this.setState({
        isFormInvalid: true,
        uploadedFileName: ""
      })
    }
  }               
}

onClickHandler = () => {
  algo.runAlgo(this.blockList,this.boothList,this.boothListCopy);
  var booth1list = [];
  var booth2list = [];
  console.log(this.blockList[0].boothList.length);
  for (var i = 0; i<this.blockList[0].boothList.length; i++){
    booth1list.push(this.blockList[0].boothList[i].projectName)
  }
  for (var i = 0; i<this.blockList[1].boothList.length; i++){
    booth2list.push(this.blockList[1].boothList[i].projectName)
  }
  this.setState({testbooth1 : booth1list});
  this.setState({testbooth2 : booth2list});
  console.log(this.blockList[0].boothList[0].projectName);
}

toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

openFileBrowser = () => {
  this.fileInput.current.click();
}


  render() {
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <img src={floorplan} 
                className="Floorplan" 
                alt="floorplan"
                style={{width: 800, height: 500}}/>
                <div>
                <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Run Algo</button> 
                </div>
                {this.state.dataLoaded && 
                <div>
                  <div>
                  <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
                  </div>
                </div>}
                <box component="span" m={1}>
                  <label>Block 1 = </label><DisplayBox value={this.state.testbooth1} />
                  <label>Block 2 = </label><DisplayBox value={this.state.testbooth2} />
                </box>
              </React.Fragment>
              
            )} />


            <Route path="/level2" component={Level2} />
            <Route path="/tryme" component={tryme} />

            
          </div>
        </div>
      </Router>
    );
  }
}  

const HoverText = styled.p

export default App;
