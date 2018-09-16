import React, { Component } from 'react';
import ViewPort from './components/ViewPort';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.color = 'blue';
    this.state = {
      x: 140,
      y: 0,
      boxes: [],
      isGameOver: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
      this.timer = setInterval(() => {
        this.moveBox(0, 20); // move the box down
      }, 250);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { x, y, boxes } = this.state;

    console.log("1. nextState ", nextState);

    console.log("2. x ", x);
    console.log("3. y ", y);

    if ( nextState.x === x && nextState.y === y ) {
      // this.setState({
      //   isGameOver: true
      // });
      clearInterval(this.timer);
      return false;
    }
    
    boxes.forEach( box => {

    if ( nextState.x === box.x && nextState.y === box.y || nextState.y === 300) {

      this.setState( {
        x: 140,
        y: 0,
        boxes: boxes.concat( {
          x: x,
          y: y
        } )
      } );
      console.log('================================added');
    }

    } );
    
    return true; // by default
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { x, y, boxes } = this.state;
    
    console.log("5. prevState ", prevState);
    
    // console.log("6. x ", x);
    // console.log("7. y ", y);
  }
  
  componentWillUnmount() {
    const { x, y, boxes } = this.state;
    clearInterval(this.timer);
  }

  onKeyUp = event => {
    if (event.key === 'ArrowRight' && this.state.x < 280) {
      this.moveBox(20, 0);
    } else if (event.key === 'ArrowLeft' && this.state.x > 0) {
      this.moveBox(-20, 0);
    }
  };

  moveBox = ( _x, _y ) => {
    console.log('moveBox');
    const { x, y, boxes } = this.state;

    if ( y >= 280 && boxes.length === 0 ) {
      this.setState({
        x: 140,
        y: 0,
        boxes: boxes.concat({
          x: x,
          y: y
        })
      })
      console.log('================================added');
    } else {
      this.setState({
        x: x + _x,
        y: y + _y
      })
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
  color: 'pink',
};

App.displayName = 'MyApp';
