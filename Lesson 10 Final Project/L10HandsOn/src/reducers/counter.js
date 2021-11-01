import { inputNum } from "../actions";

const initialState = {
  count: 0,
  inputNum:0,
  allCount:0 //watch this one too it might not be linked up
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        allCount: state.allCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        allCount: state.allCount + 1
      };
    case 'INPUT_NUM_CHANGE':
      return{
        ...state,
        inputNum: action.number
      }
    case 'INPUT_NUM':
      return{
        ...state,
        count: parseInt(state.inputNum),
        inputNum: null,
        allCount: (state.allCount=0)
      }
    default:
      return state;
  }
}

export default counterReducer;