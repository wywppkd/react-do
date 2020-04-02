import React, { useContext } from "react";
import { ColorContext } from "./Color";

function Buttons(props) {
  // 通过useContext接受useReducer的dispatch方法
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        // 调用dispatch方法
        onClick={() => {
          dispatch({ type: "UPDATE_COLOR", color: "blue" });
        }}
      >
        蓝色
      </button>
      <button
        // 调用dispatch方法
        onClick={() => {
          dispatch({ type: "UPDATE_COLOR", color: "red" });
        }}
      >
        红色
      </button>
    </div>
  );
}

export default Buttons;
