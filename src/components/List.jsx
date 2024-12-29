import React, { useState, useEffect } from "react";
import Form from "./Form";
import Task from "./Task";
import Sort from "./Sort";

const List = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isSorted, setIsSorted] = useState(false);
  const [ascending, setAscending] = useState(false)

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask, importance) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        name: newTask,
        completed: false,
        importance: importance,
      },
    ]);
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  const handleAscending = () => {
    setAscending(!ascending)
  }

  const sortedTasks = isSorted
    ? ascending 
      ? [...tasks].sort((a, b) => a.importance - b.importance)
      : [...tasks].sort((a, b) => b.importance - a.importance)
    : tasks;

  return (
    <div className="list-container">
      <Form onAddTask={addTask} />
      <Sort onSort={handleSort} isSorted={isSorted} onAscending={handleAscending} isAscending={ascending}/>
      <div className="task-list">
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            onDelete={handleDeleteTask}
            importance={task.importance}
            onUpdate={handleUpdateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
