import React, { createContext, useReducer } from "react";

export const ColorContext = createContext({});

export const Color = props => {
  const [color, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_COLOR":
        return action.color;
      default:
        return state;
    }
  }, "blue");

  return (
    // 创建useContext, 将useReducer的color和dispatch共享给子组件Text,Buttons
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
