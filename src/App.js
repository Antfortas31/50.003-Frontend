import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Level2 from './components/pages/Level2';
import Campus1 from './components/pages/Campus Center Level 1.jpg';
import Campus2 from './components/pages/Campus Center Level 2.png';
import styled from 'styled-components';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import * as algo from './algorithm';
import DisplayBox from './DisplayBox';
import Modal from "./Modal";
import { ComplexText, ColoredRect } from './components/textbox';
import { Stage, Layer, Rect, Text } from 'react-konva';
import * as fuzzer from './fuzzer';
import { pushBlocktoBooth } from './rendering';

// uuid is for generating id's
import * as uuid from 'uuid';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
      booth0: [],
      booth0render: [],
      booth1: [],
      booth1render: [],
      booth2: [],
      booth2render: [],
      booth3: [],
      booth3render: [],
      booth4: [],
      booth4render: [],
      booth5: [],
      booth5render: [],
      booth6: [],
      booth6render: [],
      booth7: [],
      booth7render: [],
      booth8: [],
      booth8render: [],
      booth9: [],
      booth9render: [],
      booth10: [],
      booth10render: [],
      booth11: [],
      booth11render: [],
      booth12: [],
      booth12render: [],
      booth13: [],
      booth13render: [],
      booth14: [],
      booth14render: [],
      booth15: [],
      booth15render: [],
      booth16: [],
      booth16render: [],
      booth17: [],
      booth17render: [],
      booth18: [],
      booth18render: [],
      booth19: [],
      booth19render: [],
      booth20: [],
      booth20render: [],
      booth21: [],
      booth21render: [],
      booth22: [],
      booth22render: [],
      specialboothlist:[],
      specialboothlistrender:[],
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
    this.fuzzLength = null;
    this.fuzzNum = null;
    this.allocated = null;
    this.success = 0;
    this.failure = 0;

  }


  renderFile = (fileObj) => {
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({
          dataLoaded: true,
          cols: resp.cols,
          rows: resp.rows
        });
        //EMPTY LISTS
        this.boothList = [];
        this.boothListCopy = [];
        this.blockList = [];
        var specialboothlist =[];
        //EMPTIED
        for (var i = 1; i < this.state.rows.length; i++) {
        	if(this.state.rows[i][4]==null){
        		var Booth = new algo.Booth(this.state.rows[i][0], this.state.rows[i][1], this.state.rows[i][3], this.state.rows[i][6], this.state.rows[i][7]);
		          this.boothList.push(Booth);
		          this.boothListCopy.push(Booth);
        	}else{
            
        		var Booth = new algo.Booth(this.state.rows[i][0], this.state.rows[i][1], this.state.rows[i][3], this.state.rows[i][6], this.state.rows[i][7], this.state.rows[i][4]);
            
            specialboothlist.push(Booth.projectName);
        		specialboothlist.push(": " + Booth.location);
            specialboothlist.push(<br></br>);
            
        	}
          
        }
        this.setState({ specialboothlist: specialboothlist });
    //first floor
    var block0 = new algo.Block(0, 8, 5);
    // contains booth 4-5 
    var block1 = new algo.Block(1, 7, 7);
    //contains booth 6 
    var block2 = new algo.Block(2, 6, 6);
    // contaisn booth 9 
    var block3 = new algo.Block(3, 4, 4);
    // cantains booth 7 
    var block4 = new algo.Block(4, 9, 4);
    //contains booth 8 
    var block5 = new algo.Block(5, 4, 4);
    // contains booth 10 
    var block6 = new algo.Block(6, 3, 3);
    // contains booth 1 
    var block7 = new algo.Block(7, 12, 7);
    // contains booth 11-15 
    var block8 = new algo.Block(8, 20, 6);
    // contains booth 31-34 
    var block9 = new algo.Block(9, 18, 7);
    // contains booth 23-30 
    var block10 = new algo.Block(10, 17, 7);
    // contains booth 35-37 
    var block11 = new algo.Block(11, 4, 8);
    // contains booth 16-17 
    var block12 = new algo.Block(12, 6, 6);
    // contains booth 22 
    var block13 = new algo.Block(13, 16, 7);
    // contains booth 18-21 
    var block14 = new algo.Block(14, 3, 8);
    // contains booth 2 
    var block15 = new algo.Block(15, 7, 8);
    // contains booth 3

    //second floor
    var block16 = new algo.Block(16, 23, 3);
    //the one contaions booth 49-56 have 6 degrees angle with the left bottom side 
    var block17 = new algo.Block(17, 14, 7);
    // the one contains booth 57-58 along the left bootom side 
    var block18 = new algo.Block(18, 12, 12);
    // booth 68 horizontaly  
    var block19 = new algo.Block(19, 13, 6);
    // contains booth 59-60 horizontaly 
    var block20 = new algo.Block(20, 13, 6);
    // contains booth 66-67 along the right bottom side  
    var block21 = new algo.Block(21, 14, 3);
    // contains booth 61-65 have 4 degrees angle with the left bottom side 
    var block22 = new algo.Block(22, 36, 6);
    // contains the booth from 39-48 horizontaly  

        this.blockList.push(block0);
        this.blockList.push(block1);
        this.blockList.push(block2);
        this.blockList.push(block3);
        this.blockList.push(block4);
        this.blockList.push(block5);
        this.blockList.push(block6);
        this.blockList.push(block7);
        this.blockList.push(block8);
        this.blockList.push(block9);
        this.blockList.push(block10);
        this.blockList.push(block11);
        this.blockList.push(block12);
        this.blockList.push(block13);
        this.blockList.push(block14);
        this.blockList.push(block15);
        this.blockList.push(block16);
        this.blockList.push(block17);
        this.blockList.push(block18);
        this.blockList.push(block19);
        this.blockList.push(block20);
        this.blockList.push(block21);
        this.blockList.push(block22);

      }
    });
  }

  fileHandler = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;


      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx") {
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }
      else {
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }
  }

  onClickHandler = () => {

    if (this.state.uploadedFileName == "") { console.log("INCORRECT FILE TYPE") } //help me include if the excel file itself format wrong as well thanks
    else if (this.state.rows[0][5] != "Length"){console.log("INCORRECT TEMPLATE")}
    else {
      //EMPTYING OUT ALL LISTS.
      this.setState({ booth0: [] });
      this.setState({ booth1: [] });
      this.setState({ booth2: [] });
      this.setState({ booth3: [] });
      this.setState({ booth4: [] });
      this.setState({ booth5: [] });
      this.setState({ booth6: [] });
      this.setState({ booth7: [] });
      this.setState({ booth8: [] });
      this.setState({ booth9: [] });
      this.setState({ booth10: [] });
      this.setState({ booth11: [] });
      this.setState({ booth12: [] });
      this.setState({ booth13: [] });
      this.setState({ booth14: [] });
      this.setState({ booth15: [] });
      this.setState({ booth16: [] });
      this.setState({ booth17: [] });
      this.setState({ booth18: [] });
      this.setState({ booth19: [] });
      this.setState({ booth20: [] });
      this.setState({ booth21: [] });
      this.setState({ booth22: [] });
      this.setState({ booth0render: [] });
      this.setState({ booth1render: [] });
      this.setState({ booth2render: [] });
      this.setState({ booth3render: [] });
      this.setState({ booth4render: [] });
      this.setState({ booth5render: [] });
      this.setState({ booth6render: [] });
      this.setState({ booth7render: [] });
      this.setState({ booth8render: [] });
      this.setState({ booth9render: [] });
      this.setState({ booth10render: [] });
      this.setState({ booth11render: [] });
      this.setState({ booth12render: [] });
      this.setState({ booth13render: [] });
      this.setState({ booth14render: [] });
      this.setState({ booth15render: [] });
      this.setState({ booth16render: [] });
      this.setState({ booth17render: [] });
      this.setState({ booth18render: [] });
      this.setState({ booth19render: [] });
      this.setState({ booth20render: [] });
      this.setState({ booth21render: [] });
      this.setState({ booth22render: [] });
      //EMPTIED
      var check = algo.runAlgo(this.blockList, this.boothList, this.boothListCopy);
      console.log(this.boothListCopy.length);
      if (this.boothList.length == 0) {
        console.log("All allocated");
        console.log(this.boothList.length);
      }
      else if (this.boothList.length > 0) {
        console.log("Some booths not allocated");
        console.log(this.boothList.length);
      }
      //LIST = NAMES, RENDER = IDs
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
      var booth7list = [];
      var booth7listrender = [];
      var booth8list = [];
      var booth8listrender = [];
      var booth9list = [];
      var booth9listrender = [];
      var booth10list = [];
      var booth10listrender = [];
      var booth11list = [];
      var booth11listrender = [];
      var booth12list = [];
      var booth12listrender = [];
      var booth13list = [];
      var booth13listrender = [];
      var booth14list = [];
      var booth14listrender = [];
      var booth15list = [];
      var booth15listrender = [];
      var booth16list = [];
      var booth16listrender = [];
      var booth17list = [];
      var booth17listrender = [];
      var booth18list = [];
      var booth18listrender = [];
      var booth19list = [];
      var booth19listrender = [];
      var booth20list = [];
      var booth20listrender = [];
      var booth21list = [];
      var booth21listrender = [];
      var booth22list = [];
      var booth22listrender = [];
      //console.log(this.blockList[0].boothList.length);

      pushBlocktoBooth(this.blockList, booth0list, booth0listrender, 0);
      pushBlocktoBooth(this.blockList, booth1list, booth1listrender, 1);
      pushBlocktoBooth(this.blockList, booth2list, booth2listrender, 2);
      pushBlocktoBooth(this.blockList, booth3list, booth3listrender, 3);
      pushBlocktoBooth(this.blockList, booth4list, booth4listrender, 4);
      pushBlocktoBooth(this.blockList, booth5list, booth5listrender, 5);
      pushBlocktoBooth(this.blockList, booth6list, booth6listrender, 6);
      pushBlocktoBooth(this.blockList, booth7list, booth7listrender, 7);
      pushBlocktoBooth(this.blockList, booth8list, booth8listrender, 8);
      pushBlocktoBooth(this.blockList, booth9list, booth9listrender, 9);
      pushBlocktoBooth(this.blockList, booth10list, booth10listrender, 10);
      pushBlocktoBooth(this.blockList, booth11list, booth11listrender, 11);
      pushBlocktoBooth(this.blockList, booth12list, booth12listrender, 12);
      pushBlocktoBooth(this.blockList, booth13list, booth13listrender, 13);
      pushBlocktoBooth(this.blockList, booth14list, booth14listrender, 14);
      pushBlocktoBooth(this.blockList, booth15list, booth15listrender, 15);
      pushBlocktoBooth(this.blockList, booth16list, booth16listrender, 16);
      pushBlocktoBooth(this.blockList, booth17list, booth17listrender, 17);
      pushBlocktoBooth(this.blockList, booth18list, booth18listrender, 18);
      pushBlocktoBooth(this.blockList, booth19list, booth19listrender, 19);
      pushBlocktoBooth(this.blockList, booth20list, booth20listrender, 20);
      pushBlocktoBooth(this.blockList, booth21list, booth21listrender, 21);
      pushBlocktoBooth(this.blockList, booth22list, booth22listrender, 22);

      booth0listrender = booth0listrender.join(" | ");
      booth1listrender = booth1listrender.join(" | ");
      booth2listrender = booth2listrender.join(" | ");
      booth3listrender = booth3listrender.join(" | ");
      booth4listrender = booth4listrender.join(" | ");
      booth5listrender = booth5listrender.join(" | ");
      booth6listrender = booth6listrender.join(" | ");
      booth7listrender = booth7listrender.join(" | ");
      booth8listrender = booth8listrender.join(" | ");
      booth9listrender = booth9listrender.join(" | ");
      booth10listrender = booth10listrender.join(" | ");
      booth11listrender = booth11listrender.join(" | ");
      booth12listrender = booth12listrender.join(" | ");
      booth13listrender = booth13listrender.join(" | ");
      booth14listrender = booth14listrender.join(" | ");
      booth15listrender = booth15listrender.join(" | ");
      booth16listrender = booth16listrender.join(" | ");
      booth17listrender = booth17listrender.join(" | ");
      booth18listrender = booth18listrender.join(" | ");
      booth19listrender = booth19listrender.join(" | ");
      booth20listrender = booth20listrender.join(" | ");
      booth21listrender = booth21listrender.join(" | ");
      booth22listrender = booth22listrender.join(" | ");
      this.setState({ booth0: booth0list });
      this.setState({ booth1: booth1list });
      this.setState({ booth2: booth2list });
      this.setState({ booth3: booth3list });
      this.setState({ booth4: booth4list });
      this.setState({ booth5: booth5list });
      this.setState({ booth6: booth6list });
      this.setState({ booth7: booth7list });
      this.setState({ booth8: booth8list });
      this.setState({ booth9: booth9list });
      this.setState({ booth10: booth10list });
      this.setState({ booth11: booth11list });
      this.setState({ booth12: booth12list });
      this.setState({ booth13: booth13list });
      this.setState({ booth14: booth14list });
      this.setState({ booth15: booth15list });
      this.setState({ booth16: booth16list });
      this.setState({ booth17: booth17list });
      this.setState({ booth18: booth18list });
      this.setState({ booth19: booth19list });
      this.setState({ booth20: booth20list });
      this.setState({ booth21: booth21list });
      this.setState({ booth22: booth22list });
      this.setState({ booth0render: booth0listrender });
      this.setState({ booth1render: booth1listrender });
      this.setState({ booth2render: booth2listrender });
      this.setState({ booth3render: booth3listrender });
      this.setState({ booth4render: booth4listrender });
      this.setState({ booth5render: booth5listrender });
      this.setState({ booth6render: booth6listrender });
      this.setState({ booth7render: booth7listrender });
      this.setState({ booth8render: booth8listrender });
      this.setState({ booth9render: booth9listrender });
      this.setState({ booth10render: booth10listrender });
      this.setState({ booth11render: booth11listrender });
      this.setState({ booth12render: booth12listrender });
      this.setState({ booth13render: booth13listrender });
      this.setState({ booth14render: booth14listrender });
      this.setState({ booth15render: booth15listrender });
      this.setState({ booth16render: booth16listrender });
      this.setState({ booth17render: booth17listrender });
      this.setState({ booth18render: booth18listrender });
      this.setState({ booth19render: booth19listrender });
      this.setState({ booth20render: booth20listrender });
      this.setState({ booth21render: booth21listrender });
      this.setState({ booth22render: booth22listrender });
      //console.log(this.state.booth0);
    }
  }

  onClickHandler2 = () => {

    //EMPTYING OUT ALL LISTS.
    this.setState({ booth0: [] });
    this.setState({ booth1: [] });
    this.setState({ booth2: [] });
    this.setState({ booth3: [] });
    this.setState({ booth4: [] });
    this.setState({ booth5: [] });
    this.setState({ booth6: [] });
    this.setState({ booth7: [] });
    this.setState({ booth8: [] });
    this.setState({ booth9: [] });
    this.setState({ booth10: [] });
    this.setState({ booth11: [] });
    this.setState({ booth12: [] });
    this.setState({ booth13: [] });
    this.setState({ booth14: [] });
    this.setState({ booth15: [] });
    this.setState({ booth16: [] });
    this.setState({ booth17: [] });
    this.setState({ booth18: [] });
    this.setState({ booth19: [] });
    this.setState({ booth20: [] });
    this.setState({ booth21: [] });
    this.setState({ booth22: [] });
    this.setState({ booth0render: [] });
    this.setState({ booth1render: [] });
    this.setState({ booth2render: [] });
    this.setState({ booth3render: [] });
    this.setState({ booth4render: [] });
    this.setState({ booth5render: [] });
    this.setState({ booth6render: [] });
    this.setState({ booth7render: [] });
    this.setState({ booth8render: [] });
    this.setState({ booth9render: [] });
    this.setState({ booth10render: [] });
    this.setState({ booth11render: [] });
    this.setState({ booth12render: [] });
    this.setState({ booth13render: [] });
    this.setState({ booth14render: [] });
    this.setState({ booth15render: [] });
    this.setState({ booth16render: [] });
    this.setState({ booth17render: [] });
    this.setState({ booth18render: [] });
    this.setState({ booth19render: [] });
    this.setState({ booth20render: [] });
    this.setState({ booth21render: [] });
    this.setState({ booth22render: [] });
    this.boothList = [];
    this.boothListCopy = [];
    this.blockList = [];
    //EMPTIED

    var tempFuzz = [];
    tempFuzz = fuzzer.fuzzerBooth();
    this.boothList = tempFuzz[0];
    this.boothListCopy = tempFuzz[1];
    this.state.fuzzLength = tempFuzz[2];
    this.state.fuzzNum = tempFuzz[3];
    //COPY THIS PART FROM THE EXCEL RENDERER

    //first floor
    var block0 = new algo.Block(0, 8, 5);
    // contains booth 4-5 
    var block1 = new algo.Block(1, 7, 7);
    //contains booth 6 
    var block2 = new algo.Block(2, 6, 6);
    // contaisn booth 9 
    var block3 = new algo.Block(3, 4, 4);
    // cantains booth 7 
    var block4 = new algo.Block(4, 9, 4);
    //contains booth 8 
    var block5 = new algo.Block(5, 4, 4);
    // contains booth 10 
    var block6 = new algo.Block(6, 3, 3);
    // contains booth 1 
    var block7 = new algo.Block(7, 12, 7);
    // contains booth 11-15 
    var block8 = new algo.Block(8, 20, 6);
    // contains booth 31-34 
    var block9 = new algo.Block(9, 18, 7);
    // contains booth 23-30 
    var block10 = new algo.Block(10, 17, 7);
    // contains booth 35-37 
    var block11 = new algo.Block(11, 4, 8);
    // contains booth 16-17 
    var block12 = new algo.Block(12, 6, 6);
    // contains booth 22 
    var block13 = new algo.Block(13, 16, 7);
    // contains booth 18-21 
    var block14 = new algo.Block(14, 3, 8);
    // contains booth 2 
    var block15 = new algo.Block(15, 7, 8);
    // contains booth 3

    //second floor
    var block16 = new algo.Block(16, 23, 3);
    //the one contaions booth 49-56 have 6 degrees angle with the left bottom side 
    var block17 = new algo.Block(17, 14, 7);
    // the one contains booth 57-58 along the left bootom side 
    var block18 = new algo.Block(18, 12, 12);
    // booth 68 horizontaly  
    var block19 = new algo.Block(19, 13, 6);
    // contains booth 59-60 horizontaly 
    var block20 = new algo.Block(20, 13, 6);
    // contains booth 66-67 along the right bottom side  
    var block21 = new algo.Block(21, 14, 3);
    // contains booth 61-65 have 4 degrees angle with the left bottom side 
    var block22 = new algo.Block(22, 36, 6);
    // contains the booth from 39-48 horizontaly  

    this.blockList.push(block0);
    this.blockList.push(block1);
    this.blockList.push(block2);
    this.blockList.push(block3);
    this.blockList.push(block4);
    this.blockList.push(block5);
    this.blockList.push(block6);
    this.blockList.push(block7);
    this.blockList.push(block8);
    this.blockList.push(block9);
    this.blockList.push(block10);
    this.blockList.push(block11);
    this.blockList.push(block12);
    this.blockList.push(block13);
    this.blockList.push(block14);
    this.blockList.push(block15);
    this.blockList.push(block16);
    this.blockList.push(block17);
    this.blockList.push(block18);
    this.blockList.push(block19);
    this.blockList.push(block20);
    this.blockList.push(block21);
    this.blockList.push(block22);
  }

  onClickHandlerFuzz = () => { //COPY OF ONCLICKHANDLER for FUZZER OUTPUT. UNUSED.
    var check = algo.runAlgo(this.blockList, this.boothList, this.boothListCopy);
    //console.log(this.boothListCopy.length);
    if (this.boothList.length == 0) {
      console.log("All allocated");
      console.log("Remaining Number of Booths: " + this.boothList.length);
      this.success++;
    }
    else if (this.boothList.length > 0) {
      console.log("Some booths not allocated");
      console.log("Remaining Number of Booths: " + this.boothList.length);
      this.failure++;
      for (var i = 0; i < this.boothList.length; i++) {
        console.log(this.boothList[i]);
      }
    }
    //LIST = NAMES, RENDER = IDs
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
    var booth7list = [];
    var booth7listrender = [];
    var booth8list = [];
    var booth8listrender = [];
    var booth9list = [];
    var booth9listrender = [];
    var booth10list = [];
    var booth10listrender = [];
    var booth11list = [];
    var booth11listrender = [];
    var booth12list = [];
    var booth12listrender = [];
    var booth13list = [];
    var booth13listrender = [];
    var booth14list = [];
    var booth14listrender = [];
    var booth15list = [];
    var booth15listrender = [];
    var booth16list = [];
    var booth16listrender = [];
    var booth17list = [];
    var booth17listrender = [];
    var booth18list = [];
    var booth18listrender = [];
    var booth19list = [];
    var booth19listrender = [];
    var booth20list = [];
    var booth20listrender = [];
    var booth21list = [];
    var booth21listrender = [];
    var booth22list = [];
    var booth22listrender = [];
    //console.log(this.blockList[0].boothList.length);

    pushBlocktoBooth(this.blockList, booth0list, booth0listrender, 0);
    pushBlocktoBooth(this.blockList, booth1list, booth1listrender, 1);
    pushBlocktoBooth(this.blockList, booth2list, booth2listrender, 2);
    pushBlocktoBooth(this.blockList, booth3list, booth3listrender, 3);
    pushBlocktoBooth(this.blockList, booth4list, booth4listrender, 4);
    pushBlocktoBooth(this.blockList, booth5list, booth5listrender, 5);
    pushBlocktoBooth(this.blockList, booth6list, booth6listrender, 6);
    pushBlocktoBooth(this.blockList, booth7list, booth7listrender, 7);
    pushBlocktoBooth(this.blockList, booth8list, booth8listrender, 8);
    pushBlocktoBooth(this.blockList, booth9list, booth9listrender, 9);
    pushBlocktoBooth(this.blockList, booth10list, booth10listrender, 10);
    pushBlocktoBooth(this.blockList, booth11list, booth11listrender, 11);
    pushBlocktoBooth(this.blockList, booth12list, booth12listrender, 12);
    pushBlocktoBooth(this.blockList, booth13list, booth13listrender, 13);
    pushBlocktoBooth(this.blockList, booth14list, booth14listrender, 14);
    pushBlocktoBooth(this.blockList, booth15list, booth15listrender, 15);
    pushBlocktoBooth(this.blockList, booth16list, booth16listrender, 16);
    pushBlocktoBooth(this.blockList, booth17list, booth17listrender, 17);
    pushBlocktoBooth(this.blockList, booth18list, booth18listrender, 18);
    pushBlocktoBooth(this.blockList, booth19list, booth19listrender, 19);
    pushBlocktoBooth(this.blockList, booth20list, booth20listrender, 20);
    pushBlocktoBooth(this.blockList, booth21list, booth21listrender, 21);
    pushBlocktoBooth(this.blockList, booth22list, booth22listrender, 22);

    booth0listrender = booth0listrender.join(" | ");
    booth1listrender = booth1listrender.join(" | ");
    booth2listrender = booth2listrender.join(" | ");
    booth3listrender = booth3listrender.join(" | ");
    booth4listrender = booth4listrender.join(" | ");
    booth5listrender = booth5listrender.join(" | ");
    booth6listrender = booth6listrender.join(" | ");
    booth7listrender = booth7listrender.join(" | ");
    booth8listrender = booth8listrender.join(" | ");
    booth9listrender = booth9listrender.join(" | ");
    booth10listrender = booth10listrender.join(" | ");
    booth11listrender = booth11listrender.join(" | ");
    booth12listrender = booth12listrender.join(" | ");
    booth13listrender = booth13listrender.join(" | ");
    booth14listrender = booth14listrender.join(" | ");
    booth15listrender = booth15listrender.join(" | ");
    booth16listrender = booth16listrender.join(" | ");
    booth17listrender = booth17listrender.join(" | ");
    booth18listrender = booth18listrender.join(" | ");
    booth19listrender = booth19listrender.join(" | ");
    booth20listrender = booth20listrender.join(" | ");
    booth21listrender = booth21listrender.join(" | ");
    booth22listrender = booth22listrender.join(" | ");
    this.setState({ booth0: booth0list });
    this.setState({ booth1: booth1list });
    this.setState({ booth2: booth2list });
    this.setState({ booth3: booth3list });
    this.setState({ booth4: booth4list });
    this.setState({ booth5: booth5list });
    this.setState({ booth6: booth6list });
    this.setState({ booth7: booth7list });
    this.setState({ booth8: booth8list });
    this.setState({ booth9: booth9list });
    this.setState({ booth10: booth10list });
    this.setState({ booth11: booth11list });
    this.setState({ booth12: booth12list });
    this.setState({ booth13: booth13list });
    this.setState({ booth14: booth14list });
    this.setState({ booth15: booth15list });
    this.setState({ booth16: booth16list });
    this.setState({ booth17: booth17list });
    this.setState({ booth18: booth18list });
    this.setState({ booth19: booth19list });
    this.setState({ booth20: booth20list });
    this.setState({ booth21: booth21list });
    this.setState({ booth22: booth22list });
    this.setState({ booth0render: booth0listrender });
    this.setState({ booth1render: booth1listrender });
    this.setState({ booth2render: booth2listrender });
    this.setState({ booth3render: booth3listrender });
    this.setState({ booth4render: booth4listrender });
    this.setState({ booth5render: booth5listrender });
    this.setState({ booth6render: booth6listrender });
    this.setState({ booth7render: booth7listrender });
    this.setState({ booth8render: booth8listrender });
    this.setState({ booth9render: booth9listrender });
    this.setState({ booth10render: booth10listrender });
    this.setState({ booth11render: booth11listrender });
    this.setState({ booth12render: booth12listrender });
    this.setState({ booth13render: booth13listrender });
    this.setState({ booth14render: booth14listrender });
    this.setState({ booth15render: booth15listrender });
    this.setState({ booth16render: booth16listrender });
    this.setState({ booth17render: booth17listrender });
    this.setState({ booth18render: booth18listrender });
    this.setState({ booth19render: booth19listrender });
    this.setState({ booth20render: booth20listrender });
    this.setState({ booth21render: booth21listrender });
    this.setState({ booth22render: booth22listrender });
    
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
          <div className="container">
            <Header />
            <Route exact path="/50.003-FrontEnd" render={props => (
              <React.Fragment>
                <div>
                  <input type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
                  <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Run Algo</button>
                </div>

                <box component="span" m={1}>
                  <label>Block 0 = </label><DisplayBox value={this.state.booth0} />
                  <label>Block 1 = </label><DisplayBox value={this.state.booth1} />
                  <label>Block 2 = </label><DisplayBox value={this.state.booth2} />
                  <label>Block 3 = </label><DisplayBox value={this.state.booth3} />
                  <label>Block 4 = </label><DisplayBox value={this.state.booth4} />
                  <label>Block 5 = </label><DisplayBox value={this.state.booth5} />
                  <label>Block 6 = </label><DisplayBox value={this.state.booth6} />
                  <label>Block 7 = </label><DisplayBox value={this.state.booth7} />
                  <label>Block 8 = </label><DisplayBox value={this.state.booth8} />
                  <label>Block 9 = </label><DisplayBox value={this.state.booth9} />
                  <label>Block 10 = </label><DisplayBox value={this.state.booth10} />
                  <label>Block 11 = </label><DisplayBox value={this.state.booth11} />
                  <label>Block 12 = </label><DisplayBox value={this.state.booth12} />
                  <label>Block 13 = </label><DisplayBox value={this.state.booth13} />
                  <label>Block 14 = </label><DisplayBox value={this.state.booth14} />
                  <label>Block 15 = </label><DisplayBox value={this.state.booth15} />
                  <label>Block 16 = </label><DisplayBox value={this.state.booth16} />
                  <label>Block 17 = </label><DisplayBox value={this.state.booth17} />
                  <label>Block 18 = </label><DisplayBox value={this.state.booth18} />
                  <label>Block 19 = </label><DisplayBox value={this.state.booth19} />
                  <label>Block 20 = </label><DisplayBox value={this.state.booth20} />
                  <label>Block 21 = </label><DisplayBox value={this.state.booth21} />
                  <label>Block 22 = </label><DisplayBox value={this.state.booth22} />
                  <label>Special Booths = </label><DisplayBox value={this.state.specialboothlist} />
                </box>
                {this.state.dataLoaded &&
                  <div>
                    <div>
                      <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
                    </div>
                  </div>
                }
              </React.Fragment>

            )} />

            <Route exact path="/tryme" render={props => (
              <React.Fragment>
                <div>
                  <img src={Campus1}
                    className="Campus1"
                    alt="Campus1"
                    style={{ position: 'absolute' }} />

                  <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                      
                      <ComplexText x={35} y={300} text={this.state.booth0render} width={70} height={200} />
                      <ColoredRect x={35} y={300} width={70} height={200}/>

                      <ComplexText x={185} y={210} text={this.state.booth1render} width={100} height={100} />
                      <ColoredRect x={185} y={210} width={100} height={100} />

                      <ComplexText x={190} y={350} text={this.state.booth2render} width={170} height={130} />
                      <ColoredRect x={190} y={350} width={100} height={100} />

                      <ComplexText x={315} y={245} text={this.state.booth3render} width={75} height={75} />
                      <ColoredRect x={320} y={250} width={60} height={60} />

                      <ComplexText x={375} y={315} text={this.state.booth4render} width={75} height={200} />
                      <ColoredRect x={375} y={315} width={75} height={200} />

                      <ComplexText x={430} y={240} text={this.state.booth5render} width={75} height={50} />
                      <ColoredRect x={440} y={250} width={50} height={50} />

                      <ComplexText x={367} y={203} text={this.state.booth6render} width={75} />
                      <ColoredRect x={380} y={215} width={40} height={40} />

                      <ComplexText x={540} y={315} text={this.state.booth7render} width={250} />
                      <ColoredRect x={540} y={315} width={250} height={150} />

                      <ComplexText x={490} y={520} text={this.state.booth8render} width={350} />
                      <ColoredRect x={490} y={520} width={350} height={100} />

                      <ComplexText x={200} y={550} text={this.state.booth9render} width={250} />
                      <ColoredRect x={200} y={550} width={250} height={150} />

                      <ComplexText x={900} y={550} text={this.state.booth10render} width={250} />
                      <ColoredRect x={900} y={550} width={250} height={150} />

                      <ComplexText x={835} y={295} text={this.state.booth11render} width={75} />
                      <ColoredRect x={835} y={295} width={75} height={200} />

                      <ComplexText x={1015} y={340} text={this.state.booth12render} width={100} />
                      <ColoredRect x={1015} y={340} width={100} height={100} />

                      <ComplexText x={850} y={200} text={this.state.booth13render} width={300} />
                      <ColoredRect x={850} y={200} width={300} height={80} />

                    </Layer>
                  </Stage>

                </div>
              </React.Fragment>

            )} />
            <Route exact path="/level2" render={props => (
              <React.Fragment>
                <div>
                  <img src={Campus2}
                    className="Campus2"
                    alt="Campus2"
                    style={{ position: 'absolute' }} />
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                      
                      <ComplexText x={300} y={600} text={this.state.booth17render} width={300} height={100}/>
                      <ColoredRect x={250} y={600} width={250} height={100}/>

                      <ComplexText x={500} y={775} text={this.state.booth18render} width={150} height={100}/>
                      <ColoredRect x={500} y={775} width={150} height={50}/>

                      <ComplexText x={630} y={700} text={this.state.booth19render} width={150} height={100}/>
                      <ColoredRect x={630} y={700} width={150} height={50}/>

                      <ComplexText x={800} y={775} text={this.state.booth20render} width={150} height={100}/>
                      <ColoredRect x={800} y={775} width={150} height={50}/>

                      <ComplexText x={900} y={600} text={this.state.booth21render} width={300} height={100}/>
                      <ColoredRect x={900} y={600} width={250} height={100}/>

                      <ComplexText x={515} y={275} text={this.state.booth22render} width={300} height={100}/>
                      <ColoredRect x={515} y={275} width={385} height={100}/>

                    </Layer>
                  </Stage>
                </div>
              </React.Fragment>
            )} />
            <Route exact path="/Fuzzer" render={props => (
              <React.Fragment>
                <div>
                  <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler2}>Fuzzer</button>
                  <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandlerFuzz}>Run Algo</button>
                </div>
                <box component="span" m={1}>
                  <label>Total Fuzzer Length</label><DisplayBox value={this.state.fuzzLength} />
                  <label>Total Fuzzer Number of Booths</label><DisplayBox value={this.state.fuzzNum} />
                  <label>Block 0 = </label><DisplayBox value={this.state.booth0render} />
                  <label>Block 1 = </label><DisplayBox value={this.state.booth1render} />
                  <label>Block 2 = </label><DisplayBox value={this.state.booth2render} />
                  <label>Block 3 = </label><DisplayBox value={this.state.booth3render} />
                  <label>Block 4 = </label><DisplayBox value={this.state.booth4render} />
                  <label>Block 5 = </label><DisplayBox value={this.state.booth5render} />
                  <label>Block 6 = </label><DisplayBox value={this.state.booth6render} />
                  <label>Block 7 = </label><DisplayBox value={this.state.booth7render} />
                  <label>Block 8 = </label><DisplayBox value={this.state.booth8render} />
                  <label>Block 9 = </label><DisplayBox value={this.state.booth9render} />
                  <label>Block 10 = </label><DisplayBox value={this.state.booth10render} />
                  <label>Block 11 = </label><DisplayBox value={this.state.booth11render} />
                  <label>Block 12 = </label><DisplayBox value={this.state.booth12render} />
                  <label>Block 13 = </label><DisplayBox value={this.state.booth13render} />
                  <label>Block 14 = </label><DisplayBox value={this.state.booth14render} />
                  <label>Block 15 = </label><DisplayBox value={this.state.booth15render} />
                  <label>Block 16 = </label><DisplayBox value={this.state.booth16render} />
                  <label>Block 17 = </label><DisplayBox value={this.state.booth17render} />
                  <label>Block 18 = </label><DisplayBox value={this.state.booth18render} />
                  <label>Block 19 = </label><DisplayBox value={this.state.booth19render} />
                  <label>Block 20 = </label><DisplayBox value={this.state.booth20render} />
                  <label>Block 21 = </label><DisplayBox value={this.state.booth21render} />
                  <label>Block 22 = </label><DisplayBox value={this.state.booth22render} />
                  <label>Successes = </label><DisplayBox value={this.success} />
                  <label>Failures = </label><DisplayBox value={this.failure} />
                </box>
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
