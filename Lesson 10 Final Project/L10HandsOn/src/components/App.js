import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNum, inputNumChange} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNum={this.props.onInputNum} onInputNumChange={this.props.onInputNumChange} allCount={this.props.allCount}/>
      </div>
    );
  }
}
// allCount, onInputNumChange, onInputNum, inputNum
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNum: () => dispatch(inputNum()),
    onInputNumChange: (number) => dispatch(inputNumChange(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      inputNum: state.inputNum,
      allCount: state.allCount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);