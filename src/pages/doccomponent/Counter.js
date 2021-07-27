import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    },
  }
}

class Counter extends Component {

  handleIncrement() {
    const { increment } = this.props;
    increment();
  }

  handleDecrement() {
    const { decrement } = this.props;
    decrement();
  }

  handleReset() {
    const { reset } = this.props;
    reset();
  }

  render() {
    return (
      <div>
        <div>当前计数为(显示redux计数): {this.props.counter.count}</div>
        <button onClick={this.handleIncrement.bind(this)}>自增</button>
        <button onClick={this.handleDecrement.bind(this)}>自减</button>
        <button onClick={this.handleReset.bind(this)}>重置</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)