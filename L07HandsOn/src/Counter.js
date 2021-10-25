import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };
  // increment5 = () => {
  //   this.props.dispatch({
  //     type: 'Increment5'
  //   });
  // };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };
  // decrement1 = () => {
  //   this.props.dispatch({
  //     type: 'Decrement1'
  //   });
  // };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          {/* <button onClick={this.decrement1}>-5</button>
          <span>{this.props.count}</span> */}
          <button onClick={this.increment}>+</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);