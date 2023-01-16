import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState(""); //입력 값
  const [isValid, setIsValid] = useState(true);
  
  //모든 키의 입력이 있을 때 반응하는 핸들러
  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //입력된 값이 없을 때(길이=0) ->값 전달 x
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    //입력된 값이 있을 때(길이>0) -> 입력 값 전달
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* 동적 인라인 스타일 */}
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            backgroundColor: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
