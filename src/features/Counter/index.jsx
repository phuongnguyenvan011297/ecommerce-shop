import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counterSlice";
Counter.propTypes = {};

function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };
  return (
    <div>
      Counter:{counter}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
