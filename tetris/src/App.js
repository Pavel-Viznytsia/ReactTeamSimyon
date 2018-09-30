import React, { Component, PureComponent } from 'react';
import ViewPort from './components/ViewPort';

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.timer = 0;
    this.color = 'blue';
    this.state = {
      x: 140,
      y: 0,
      boxes: [],
      isGameOver: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval( () => {
      this.moveBox( 0, 20 ); // move the box down
    }, 100 );
  }
  
  shouldComponentUpdate( nextProps, nextState ) {
    const { isGameOver } = this.state;
    return !isGameOver;
  }

  componentWillUnmount() {
    clearInterval( this.timer );
  }

  onKeyUp = event => {
    if ( event.key === 'ArrowRight' && this.state.x < 280 ) {
      this.moveBox( 20, 0 );
    } else if ( event.key === 'ArrowLeft' && this.state.x > 0 ) {
      this.moveBox( -20, 0 );
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
          y: y,
        } ),
      } );
    } else if ( !isGameOver ) {
      this.setState( state => ( {
        x: state.x + _x,
        y: state.y + _y,
      } ) );
      this.onPlaceExist();
    }
  };

  onPlaceExist = () => {
    const { x, y, boxes } = this.state;

    if ( boxes.length !== 0 ) {
      boxes.forEach( box => {
        if ( box.y === 0 && y > 0 ) {
          this.setState( {
            x: 140,
            y: 0,
            isGameOver: true,
          } );
        } else if ( box.x === x && box.y === y || y === 300 ) {
          this.setState( {
            x: 140,
            y: 0,
            boxes: boxes.concat( {
              x: x,
              y: y - 20,
            } ),
          } );
        }
      } );
    }
  }

  playAgain = () => {
    this.setState(state => ({
      x: 140,
      y: 0,
      boxes: [],
      isGameOver: !state.isGameOver,
    }));
  }

  render() {
    return (
      <div className="application">
        <ViewPort
          state={this.state}
          onKeyUp={this.onKeyUp}
          color={this.props.color}
          playAgain = {this.playAgain}
        />
      </div>
    );
  }
}

App.defaultProps = {
  color: 'pink',
};

App.displayName = 'MyApp';
