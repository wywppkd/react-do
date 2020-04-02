import React, { useContext } from "react";
import { ColorContext } from "./Color";

function Text(props) {
  // 通过useContext接受useReducer的color属性
  const { color } = useContext(ColorContext);
  return (
    <div>
      <div style={{ color: color }}>hello world</div>
    </div>
  );
}

export default Text;
