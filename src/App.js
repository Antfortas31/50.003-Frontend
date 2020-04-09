import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Level2 from './components/pages/Level2';
import Campus1 from './components/pages/Campus Center Level 1.png';
import styled from 'styled-components';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import * as algo from './algorithm';
import DisplayBox from './DisplayBox';
import Modal from "./Modal";
import {ComplexText,ColoredRect} from './components/textbox';
import  {Stage, Layer, Rect, Text} from 'react-konva';

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
      testbooth0 : [],
      testbooth0render: [],
      testbooth1 : [],
      testbooth1render: [],
      testbooth2 : [],
      testbooth2render: [],
      testbooth3 : [],
      testbooth3render: [],
      testbooth4 : [],
      testbooth4render: [],
      testbooth5 : [],
      testbooth5render: [],
      testbooth6 : [],
      testbooth6render: [],
      show: false,
      header: "Block1",
      footer: "",
      desc: "Booth1(project_name,tyoe,width,length,ID)"
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
        for (var i = 1; i<this.state.rows.length; i++){
          var Booth = new algo.Booth(this.state.rows[i][0], this.state.rows[i][1], this.state.rows[i][3], this.state.rows[i][6], this.state.rows[i][7]);
          this.boothList.push(Booth);
          this.boothListCopy.push(Booth);
        }
        var block0 = new algo.Block(0,5,5);
        var block1 = new algo.Block(1,20,3);
        var block2 = new algo.Block(2,25,10);
        var block3 = new algo.Block(3,10,4);
        var block4 = new algo.Block(4,30,2);
        var block5 = new algo.Block(5,20,4);
        var block6 = new algo.Block(6,5,5);

        // var block0 = new algo.Block(0,2,2);
        // var block1 = new algo.Block(1,2,2);
        // var block2 = new algo.Block(2,3,3);
        // var block3 = new algo.Block(3,3,2);
        // var block4 = new algo.Block(4,3,3);
        // var block5 = new algo.Block(5,2,3);
        // var block6 = new algo.Block(6,2,3);

        this.blockList.push(block0);
        this.blockList.push(block1);
        this.blockList.push(block2);
        this.blockList.push(block3);
        this.blockList.push(block4);
        this.blockList.push(block5);
        this.blockList.push(block6);
        
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
  var check = algo.runAlgo(this.blockList,this.boothList,this.boothListCopy);
  if(this.boothList.length == 1){
    console.log("All allocated");
    console.log(this.boothList.length);
  }
  else if (this.boothList.length > 1){
    console.log("Some booths not allocated");
    console.log(this.boothList.length);
  }
  var booth0list = [];
  var booth0listrender = [];
  var booth1list = [];
  var booth1listrender = [];
  var booth2list = [];
  var booth2listrender = [];
  var booth3list = [];
  var booth3listrender = [];
  var booth4list = [];
  var booth4listrender = [];
  var booth5list = [];
  var booth5listrender = [];
  var booth6list = [];
  var booth6listrender = [];
  //console.log(this.blockList[0].boothList.length);
    for (var i = 0; i<this.blockList[0].boothList.length; i++){
      booth0list.push(this.blockList[0].boothList[i].projectName);
      booth0listrender.push(booth0list[i]);
      booth0listrender.push("|");
    }
    
  for (var i = 0; i<this.blockList[1].boothList.length; i++){
    booth1list.push(this.blockList[1].boothList[i].projectName);
    booth1listrender.push(booth1list[i]);
    booth1listrender.push("<\br>");
  }
  for (var i = 0; i<this.blockList[2].boothList.length; i++){
    booth2list.push(this.blockList[2].boothList[i].projectName);
    booth2listrender.push(booth2list[i]);
    booth2listrender.push("|");
  }
  for (var i = 0; i<this.blockList[3].boothList.length; i++){
    booth3list.push(this.blockList[3].boothList[i].projectName);
    booth3listrender.push(booth3list[i]);
    booth3listrender.push("|");
  }
  for (var i = 0; i<this.blockList[4].boothList.length; i++){
    booth4list.push(this.blockList[4].boothList[i].projectName);
    booth4listrender.push(booth4list[i]);
    booth4listrender.push("|");
  }
  for (var i = 0; i<this.blockList[5].boothList.length; i++){
    booth5list.push(this.blockList[5].boothList[i].projectName);
    booth5listrender.push(booth5list[i]);
    booth5listrender.push("|");
  }
  for (var i = 0; i<this.blockList[6].boothList.length; i++){
    booth6list.push(this.blockList[6].boothList[i].projectName);
    booth6listrender.push(booth6list[i]);
    booth6listrender.push("|");
  }
  this.setState({testbooth0 : booth0list});
  this.setState({testbooth1 : booth1list});
  this.setState({testbooth2 : booth2list});
  this.setState({testbooth3 : booth3list});
  this.setState({testbooth4 : booth4list});
  this.setState({testbooth5 : booth5list});
  this.setState({testbooth6 : booth6list});
  booth1listrender.pop();
  booth2listrender.pop();
  this.setState({testbooth1render : booth1listrender});
  this.setState({testbooth2render : booth2list});
}

toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

openFileBrowser = () => {
  this.fileInput.current.click();
}

showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false });
};

  render() {
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <Header/>
            <Route exact path="/50.003-FrontEnd" render={props => (
              <React.Fragment>
                <img src={Campus1} 
                className="Campus1" 
                alt="Campus1"/>
                <div>
                <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Run Algo</button> 
                </div>
                {this.state.dataLoaded && 
                <div>
                  <div>
                  <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
                  </div>
                </div>
                }
                
                <box component="span" m={1}>
                  <label>Block 0 = </label><DisplayBox value={this.state.testbooth0} />
                  <label>Block 1 = </label><DisplayBox value={this.state.testbooth1} />
                  <label>Block 2 = </label><DisplayBox value={this.state.testbooth2} />
                  <label>Block 3 = </label><DisplayBox value={this.state.testbooth3} />
                  <label>Block 4 = </label><DisplayBox value={this.state.testbooth4} />
                  <label>Block 5 = </label><DisplayBox value={this.state.testbooth5} />
                  <label>Block 6 = </label><DisplayBox value={this.state.testbooth6} />
                </box>
              </React.Fragment>
              
            )} />


            <Route path="/level2" component={Level2} />
            <Route exact path="/tryme" render={props => (
              // <React.Fragment>
              //   <div>
              //     <h1>React Modal</h1>
              //     <img src={Campus1} 
              //       className="Campus1" 
              //       alt="Campus1"
              //       //style={{position: 'absolute'}}
              //       />
                  
              //     <Stage width={window.innerWidth} height={window.innerHeight}>
              //       <Layer>
                    
              //         <ComplexText x={100} y={100} text={this.state.testbooth0} width={500} />
              //         <ColoredRect x={100} y={100} width={500} height={150}/>

              //         <ComplexText x={100} y={300} text={this.state.testbooth1} width={500} />
              //         <ColoredRect x={100} y={300} width={500} height={150}/>    

              //         <ComplexText x={100} y={500} text={this.state.testbooth2} width={500} />
              //         <ColoredRect x={100} y={500} width={500} height={150}/> 

              //         <ComplexText x={650} y={100} text={this.state.testbooth3} width={500} />
              //         <ColoredRect x={650} y={100} width={500} height={150}/>
                         
              //         <ComplexText x={650} y={300} text={this.state.testbooth4} width={500} />
              //         <ColoredRect x={650} y={300} width={500} height={150}/> 

              //         <ComplexText x={650} y={500} text={this.state.testbooth5} width={500} />
              //         <ColoredRect x={650} y={500} width={500} height={150}/>   

              //         <ComplexText x={1200} y={100} text={this.state.testbooth6} width={150} />
              //         <ColoredRect x={1200} y={100} width={200} height={550}/> 

              //       </Layer>
              //     </Stage>

              //   </div>
              // </React.Fragment>
              <React.Fragment>
              <div>
                <h1>React Modal</h1>
                <img src={Campus1} 
              className="Campus1" 
              alt="Campus1"
              style={{position:'absolute'}}/>
                
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                  
                    <ComplexText x={270} y={190} text={this.state.testbooth0} width={380} height={120}/>
                    <ColoredRect x={270} y={190} width={380} height={120}/>

                    <ComplexText x={130} y={250} text={this.state.testbooth1} width={80} height={80}/>
                    <ColoredRect x={130} y={250} width={80} height={80}/>    

                    <ComplexText x={210} y={380} text={this.state.testbooth2} width={170} height={130}/>
                    <ColoredRect x={210} y={380} width={170} height={130}/> 

                    <ComplexText x={720} y={240} text={this.state.testbooth3} width={85} height={85}/>
                    <ColoredRect x={720} y={240} width={85} height={85}/>
                       
                    <ComplexText x={400} y={350} text={this.state.testbooth4} width={150} height={130}/>
                    <ColoredRect x={400} y={350} width={150} height={130}/> 

                    <ComplexText x={570} y={365} text={this.state.testbooth5} width={140} height={150}/>
                    <ColoredRect x={570} y={365} width={140} height={150}/>   

                    <ComplexText x={1200} y={100} text={this.state.testbooth6} width={150} />
                    <ColoredRect x={1200} y={100} width={200} height={550}/> 

                  </Layer>
                </Stage>

              </div>
            </React.Fragment>

            )} />

            
          </div>
        </div>
      </Router>
    );
  }
}  

const HoverText = styled.p

export default App;
