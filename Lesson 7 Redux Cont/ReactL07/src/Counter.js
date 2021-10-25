import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };
  increment5 = ()=>{
    this.props.dispatch({
      type: 'Increment5'
    })
  }

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };
  decrement1=()=>{
    this.props.dispatch({
      type: 'Decrement1'
    })
  }

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
	      <h1>Counter</h1>
	      <div>
		     <span>{this.props.count}</span><br/>
		     <button onClick={this.increment}> Increase by 1 </button><br/>
		     <button onClick={this.increment5}> Increase by 5 </button><br/>
		     <button onClick={this.decrement}> Decrease by 1 </button><br/>
		      <button onClick={this.decrement1}> Decrease by 10 </button><br/>
	    	  <button onClick={this.reset}> Reset </button>
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