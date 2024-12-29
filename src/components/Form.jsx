import React, { useState } from "react";
import Meter from './Meter'

const Form = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [importance, setImportance] = useState()

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim()) {
      onAddTask(inputValue, importance);
      setInputValue("");
    }
  };

  const handleImportanceChange = (value) => {
    setImportance(value)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="task-input"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Enter Task"
        id="task-input"
      />
      <Meter onChange={handleImportanceChange}/>
      <button type="submit" className="submit-button">
        Create
      </button>
    </form>
  );
};

export default Form;