import React from "react";
import { useDispatch } from "react-redux";
import { increaseNumber } from "../../redux/actions/action";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseNumber(5))}>Increase</button>
    </div>
  );
};

export default Footer;
