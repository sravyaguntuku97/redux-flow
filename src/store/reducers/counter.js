import * as actionTypes from "../actions/actionTypes"
import {updateObject} from '../utility'

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
    return updateObject(state, {counter: state.counter + 1})
      break;
    case actionTypes.DECREMENT:
    return updateObject(state, {counter: state.counter - 1})
      break;
    case actionTypes.ADD:
    return updateObject(state, {counter: state.counter +5})
      break;
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - 5})
      break;

      default:
      return state;
      break
  }

  
};

export default reducer;
