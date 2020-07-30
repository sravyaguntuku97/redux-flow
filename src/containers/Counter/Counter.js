import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions/actionTypes"
import * as actionCreaters from "../../store/actions/index"
//REDUX
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((result) => {
            return <li onClick={()=>this.props.onDeleteResult(result.id)} key={result.id}>{result.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreaters.increment()),
    onDecrementCounter: () => dispatch(actionCreaters.decrement()),
    onAddCounter: () => dispatch(actionCreaters.add(5)),
    onSubtractCounter: () => dispatch(actionCreaters.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreaters.store_result(result)),
    onDeleteResult: (id) => dispatch(actionCreaters.delete_result(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
