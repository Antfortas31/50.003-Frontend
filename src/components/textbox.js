import React,{Component}from 'react';
import Konva from  'konva';
import  {Stage, Layer, Rect, Text} from 'react-konva';

export class ColoredRect extends React.Component {
  state = {
    x: this.props.x,
    y:this.props.y,
    
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: this.props.width,
        height: this.props.height,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.2,
        cornerRadius: 10
  };
 /* handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };*/
  render() {
    return (
         <Rect
        x={this.state.x}
        y={this.state.y}
        width={this.state.width}
        height={this.props.height}
        stroke={this.state.stroke}
        strokeWidth = {this.state.strokeWidth}
        cornerRadius = {this.state.cornerRadius}
        /*fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}*/
        
      />  
    );
  }
}

export class ComplexText extends Component{
  constructor(props){
    super(props);
    this.state = {
      stroke: "black",
      x: this.props.x,
      y: this.props.y,
      text:
      this.props.text,
      fontSize: 16,
      fontFamily: 'Calibri',
      //fill: '#555',
      width: this.props.width,
      padding: 20,
      align: 'left',
      wrap: "word",
    }
    //this.handleClick=this.handleClick.bind(this);
    //this.handleDragStart=this.handleDragStart.bind(this);
    //this.handleDragEnd=this.handleDragEnd.bind(this);
  }
  /*
  handleDragStart(){
    this.setState({fontSize: this.state.fontSize+10});
  }
  handleDragEnd(){
    this.setState({fontSize:this.state.fontSize-10});
  }
  handleClick(){
    this.setState({fontSize:20});
  }*/

  render(){
    return(
    
      <Text
    x={this.state.x} y={this.state.y} text={this.state.text} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}
    fill={this.state.fill} width={this.state.width} padding={this.state.padding} align={this.state.align} 
    //onClick={this.handleClick} onDragStart={this.handleDragStart}
    //onDragEnd={this.handleDragEnd} draggable='false'
    />
    
    );
  }
}