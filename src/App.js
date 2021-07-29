/** @format */
import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { AssistiveTouch } from "react-assistivetouch-menu";
class App extends React.Component {
  constructor(props) {

    super(props);
    let { one, two } = this.generateRandomColors(3);
    let matches=      this.splitpicked(two);


    this.state = {
      colors: one,
      pickedColor: two,
      level: 3,
      restartmsg: "CHANGE COLOR",
      message: "",
      red: matches[0],
      green: matches[1],
      blue: matches[2]
    };
  }

  randomColor = (num) => {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  generateRandomColors = (num) => {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
      //get random color and push into arr
      arr.push(this.randomColor(num));
    }
    //return that array
    var random = Math.floor(Math.random() * num);
    let pickclr = arr[random];
    return { one: arr, two: pickclr };
  };
  changeColor = () => {
    let { one, two } = this.generateRandomColors(this.state.level);
    let matches=      this.splitpicked(two||this.state.pickedColor);

    this.setState({
      colors: one,
      pickedColor: two,
      restartmsg: "CHANGE COLOR",red:matches[0],
      green: matches[1],
    blue:matches[2] 
    });
    // this.splitpicked();

  };

  // UNSAFE_componentWillMount() {
  //   let { one, two } = this.generateRandomColors(this.state.level);
  //   let matches=      this.splitpicked(two||this.state.pickedColor);

  //   this.setState({ colors: one, pickedColor: two,red:matches[0],
  //     green: matches[1],
  //   blue:matches[2]  });
  //   this.splitpicked();

  // }
  onChangelevel = (e) => {
    console.log("changelevel");
    if (e.target.checked === true) {
      let { one, two } = this.generateRandomColors(6);
      let matches=      this.splitpicked(two||this.state.pickedColor);

      this.setState({ level: 6, colors: one, pickedColor: two ,red:matches[0],
        green: matches[1],
      blue:matches[2]});
    } else {
      let { one, two } = this.generateRandomColors(3);
      let matches=      this.splitpicked(two||this.state.pickedColor);

      this.setState({ level: 3, colors: one, pickedColor: two,red:matches[0],
        green: matches[1],
      blue:matches[2] });

    }
  };
  prodcolor = (index) => {
    if (index <= this.state.level) {
      return { backgroundColor: this.state.colors[index - 1] };
    } else {
      return {};
    }
  };
  splitpicked=(rgb1)=>{
    console.log(rgb1);
    let rgb=rgb1;
    var matches = rgb&&rgb.match(/\d+/g);
    return matches
  }

  onClickColor = (e, id) => {
    if (e.target.style.backgroundColor === this.state.pickedColor) {
      for (var i = 1; i <= this.state.level; i++) {
        document.getElementById(i.toString()).style.backgroundColor =
          e.target.style.backgroundColor;
        this.setState({ restartmsg: "PLAY AGAIN?", message: "" });
      }
    } else {
      document.getElementById(id).style.backgroundColor = "transparent";
      this.setState({ message: "TRY AGAIN" });
    }
  };
  render() {

    return (
      <div className='App'>
        <div className='headerbox'>
          <h1>The Great </h1>
          <h3 id='rgb'>{this.state.pickedColor}</h3>
          <h1>Color Game</h1>
        </div>
        <div className='headerbuttons'>
          <div onClick={this.changeColor} className='wrapperbut'>
            <span
              style={{
                verticalAlign: "-webkit-baseline-middle",
                color: "black",
              }}>
              {this.state.restartmsg}
            </span>
          </div>
          <div
            style={{
              display: "inline-block",
              position: "absolute",
              top: "17em",
              left: "38em",
              color: "white",
            }}>
            {this.state.message}
          </div>
          <div className='wrappertog'>
            <span
              style={{
                verticalAlign: "-webkit-baseline-middle",
                color: "yellow",
              }}></span>
            <span
              style={{
                verticalAlign: "-webkit-baseline-middle",
                color: "black",
              }}>
              EASY
            </span>
            <label className='switch'>
              <input onChange={this.onChangelevel} type='checkbox' />
              <span className='slider round'></span>
            </label>
            <span
              style={{
                verticalAlign: "-webkit-baseline-middle",
                color: "black",
              }}>
              HARD
            </span>
          </div>
        </div>

        <div id='tablebox'>
          <table id='colortable'>
            <tbody>
              <tr>
                <td>
                  <motion.div
                    style={this.prodcolor(1)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='1'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
                <td>
                  <motion.div
                    style={this.prodcolor(2)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='2'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
                <td>
                  <motion.div
                    style={this.prodcolor(3)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='3'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <motion.div
                    style={this.prodcolor(4)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='4'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
                <td>
                  <motion.div
                    style={this.prodcolor(5)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='5'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
                <td>
                  <motion.div
                    style={this.prodcolor(6)}
                    onClick={(e) => this.onClickColor(e, e.target.id)}
                    id='6'
                    className='container square'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>

        </div>
          <AssistiveTouch  size="XL" behaviour="freeflow" initialPos={{ left: 0, top: 500 }} menuItems={getMenuItems(this.state.red,this.state.green,this.state.blue)}
    />
      </div>
    );
  }
}

export default App;


function getMenuItems(a,b,c) {
  let red= "rgb("+a+",0,0)";
  let green="rgb(0,"+b+",0)";
  let blue="rgb(0,0,"+c+")";
  return [{
      icon: <div  className="menuitem "><div style={{backgroundColor:red}} className="colorspot"></div></div>,
      label: "red"
    },{
      icon: <div  className="menuitem "><div style={{backgroundColor:green}} className="colorspot"></div></div>,
      label: "green"
    },{
      icon: <div   className="menuitem "><div style={{backgroundColor:blue}} className="colorspot"></div></div>,
      label: "blue"
    }];
}