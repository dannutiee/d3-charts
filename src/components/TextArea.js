import React, { useContext } from "react";
import styled from "styled-components";
import chartsContext from "../_context/chartsContext";

const TextAreaWrapper = styled.div`
  padding: 15px;
  min-height: 100px;
  textarea {
    width: 100%;
    background: #252c47;
    border: 1px solid rgba(54, 61, 81, 0.7);
    color: white;
    min-height: 100px;
    outline: none;
    resize: none;
    padding-left: 15px;
    box-sizing: border-box;
    border-left: 5px solid;
    font-size: 16px;
    line-height: 24px;
    border-left-color: ${p => p.usercolor};
  }
`;

const UserName = styled.div`
  margin-bottom: 10px;
  color: ${p => p.textColor};
  text-transform: capitalize;
`;

const TextArea = ({ type }) => {
  const [state, dispatch] = useContext(chartsContext);

  const setType = type == "user1" ? "SET_USER1_TEXT" : "SET_USER2_TEXT";
  const onTextInputChange = e => {
    dispatch({
      type: setType,
      text: e.target.value
    });
  };

  const userColors = {
    user2: "#785ad0",
    user1: "#f7c337"
  };

  return (
    <TextAreaWrapper usercolor={userColors[type]}>
      <UserName textColor={userColors[type]}>{type}</UserName>
      <textarea
        onChange={onTextInputChange}
        placeholder="Tekst"
        value={state.text[type] || ""}
        spellCheck="false"
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
