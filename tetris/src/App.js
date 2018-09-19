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
    this.timer = setInterval(() => {
      this.moveBox(0, 20); // move the box down
    }, 100);
  }
  
  shouldComponentUpdate( nextProps, nextState ) {
    const { x, y, boxes, isGameOver } = this.state;

    boxes.forEach( box => {
      if ( boxes.length !== 0 ) {
        if ( box.y <= 120 ) {
          this.setState( prevState => ( {
            x: 140,
            y: 0,
            isGameOver: !prevState
          } ) );
          clearInterval( this.timer );
        }

        if ( nextState.x === box.x && nextState.y === box.y || nextState.y === 300 ) {
          this.setState( {
            x: 140,
            y: 0,
            boxes: boxes.concat( {
              x: x,
              y: y
            } )
          } );
        }
      }
    } );
    return !isGameOver; // by default
  }
  
  componentDidUpdate(prevProps, prevState) {}
  
  componentWillUnmount() {
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
    const { x, y, boxes, isGameOver } = this.state;

    if ( y >= 280 && boxes.length === 0 ) {
      this.setState( {
        x: 140,
        y: 0,
        boxes: boxes.concat( {
          x: x,
          y: y
        } )
      } );
    } else if ( !isGameOver ) {
      this.setState( prevState => ( {
        x: prevState.x + _x,
        y: prevState.y + _y
      } ) );
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
