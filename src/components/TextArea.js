import React, { useContext, useState, useEffect } from "react";
import chartsContext from "../_context/chartsContext";

const TextArea = ({ type }) => {
  const [state, dispatch] = useContext(chartsContext);

  const setType = type == "user1" ? "SET_USER1_TEXT" : "SET_USER2_TEXT";
  const onTextInputChange = e => {
    dispatch({
      type: setType,
      text: e.target.value
    });
  };

  return (
    <div>
      <input
        onChange={onTextInputChange}
        placeholder="Tekst"
        value={state.text[type] || ""}
      />
    </div>
  );
};

export default TextArea;
