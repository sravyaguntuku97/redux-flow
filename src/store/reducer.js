import * as actionTypes from "./actions"


const initialState = {
  counter: 0,
  results:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
          ...state,
        counter: 
        state.counter + 1,
      };
      break;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 5,
      };
      break;
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 5,
      };
      break;
 
      case actionTypes.STORE_RESULT:
      return{
        ...state,
        results:state.results.concat({id:new Date(),value:state.counter})
      }
      case actionTypes.DELETE_RESULT:
    //   const id = 2;
    //   const newArray= [...state.results];
    //   newArray.splice(id,1)

    const updatedArray = state.results.filter(result=>result.id !== action.resultElId)
      return{
        ...state,
        results:updatedArray
      }


      default:
      return state;
      break
  }

  
};

export default reducer;
