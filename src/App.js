import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import Addtask from "./component/Addtask";

function App() {
  // to hide or unhide the form with add button
  const [showAddTask, setShowAddTask] = useState(false);

  //to set the tasks
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task available"
      )}
    </div>
  );
}

export default App;

/* ==============================https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=3005s 1:20 59 */
