import React, { useState } from "react";
import Meter from "./Meter";

const Task = ({
  name,
  completed,
  id,
  onDelete,
  onUpdate,
  importance,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editImportance, setEditImportance] = useState(importance);

  const storedTasks = JSON.parse(localStorage.getItem("taskList"));

  const handleToggle = () => {
    if (storedTasks) {
      const updatedTasks = storedTasks.filter((task) => task.id !== id);
      localStorage.setItem("taskList", JSON.stringify(updatedTasks));
      console.log("Handled Toggle");
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (editMode) {
      onUpdate(id, {
        name: editName,
        importance: editImportance,
      });
    }
    setEditMode(!editMode);
  };

  const handleImportanceChange = (newValue) => {
    setEditImportance(parseInt(newValue));
  };

  return (
    <div className="task-item">
      {editMode ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <Meter
            value={editImportance} 
            onChange={handleImportanceChange} 
          />
          <button
            onClick={() => {
              handleToggle();
              handleEdit();
            }}
            className="editButton"
          >
            SAVE
          </button>
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <p>Importance Level: {importance}</p>
          <button 
            onClick={handleEdit}
            className="editButton"
            >
              EDIT
            </button>
          <button
            checked={completed}
            onClick={handleToggle}
            className="checkedButton"
          >
            X
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
