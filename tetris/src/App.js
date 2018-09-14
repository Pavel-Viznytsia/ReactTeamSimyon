import React, { Component } from 'react';
import ViewPort from './components/ViewPort';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.color = "blue";
    this.state = {
      x: 140,
      y: 0,
      boxes: [{ x: 0, y: 280 }]
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.color = "red";
    //   this.forceUpdate(); применять не рекомендуется
    // }, 500 );
    this.timer = setInterval(() => {
      this.moveBox(0, 20);
    }, 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onKeyUp = event => {
    if (event.key === "ArrowRight") {
      this.moveBox(20, 0);
    } else if (event.key === "ArrowLeft") {
      this.moveBox(-20, 0);
    }
  };

  moveBox = (x, y) => {
    if (this.state.y === 280) {
      const prevX = this.state.boxes[this.state.boxes.length - 1].x;
      this.setState({
        x: 140,
        y: 0,
        boxes: this.state.boxes.concat({
          x: prevX + 20,
          y: 280
        })
      });
    } else {
      if (this.state.x < 280 && this.state.y < 280) {
        this.setState({
          x: this.state.x + x,
          y: this.state.y + y
        });
      }
    }
  };

  render() {
    return (
      <div className="application">
        <ViewPort
          state={this.state}
          onKeyUp={this.onKeyUp}
          color={this.props.color}
        />
      </div>
    );
  }
}

App.defaultProps = {
  color: "pink"
};

App.displayName = "MyApp";
