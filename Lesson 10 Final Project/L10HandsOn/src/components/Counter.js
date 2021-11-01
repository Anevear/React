import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, allCount, onInputNumChange, onInputNum, inputNum }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br/>
          <p>Times the increment/decrement buttons have been clicked: {allCount}</p>
          <br/>
          <input type="text" onChange={event => onInputNumChange(event.target.value)} value={inputNum}/>
          <button onClick={onInputNum}>Change Count Number</button>
        </div>
      </div>
    );
}
 

export default Counter;