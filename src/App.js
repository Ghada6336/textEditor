import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {

  state ={ color:"black" ,bold :false ,italic :false , underline: false};
  toggleStyle =style=>{
    const newStyle= !this.state[style] ;
    this.setState({[style]:newStyle});
  }
  // changebold = () =>{
  //   const newbold= !this.state.bold ;
  //   this.setState=({bold=newbold});

  // }
  // changeitalic = () =>{
  //   const newitalic = !this.state.italic  ;
  //   this.setState=({italic =newitalic });

  // }
  // changeunderline = () =>{
  //   const newunderline= !this.state.underline ;
  //   this.setState=({underline=newunderline});

  // }
  setColor = color => this.setState({color : color}); 
  render() {
    const stylingBoxes = stylings.map(style => (
      <button  
      className="btn btn-light"
       style={styles[style]} 
       key={style} 
        onClick={() => this.toggleStyle(style)}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => 
      {
        const isCurrentColor = color === this.state.color;
        const size = isCurrentColor ? 40 : 30 ;

       return (
      
      <button
        style={{ backgroundColor: color, height: size, width: size }}
        key={color}
        onClick={() => this.setColor(color)}
      />
    )});

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea  style={{color :this.state.color ,
        fontWeight: this.state.bold ? "bold" : "" ,
        fontStyle: this.state.italic ?"italic":"",
        textDecorationLine: this.state.underline?"underline":"",


        }}/>
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
