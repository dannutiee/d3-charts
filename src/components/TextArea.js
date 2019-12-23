import React, { useContext, useState, useEffect } from "react";
import chartsContext from "../_context/chartsContext";
import { countLetterOcurences } from "../utils/countLetterOcurences";

const TextArea = () => {
  const [state, dispatch] = useContext(chartsContext);

  const onTextInputChange = e => {
    dispatch({
      type: "SET_TEXT",
      ...state,
      text: e.target.value
    });
  };

  //   console.log('countLetterOcurences', countLetterOcurences('Danuta'))

  return (
    <div>
      <input
        onChange={onTextInputChange}
        placeholder="Tekst"
        value={state.text || ""}
      />
    </div>
  );
};

export default TextArea;
