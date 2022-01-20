import React, { useState, useEffect } from "react";

import Header from "./component/Header";
import Tasks from "./component/Tasks";
import Addtask from "./component/Addtask";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  // to hide or unhide the form with add button
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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
    const response = await fetch("http://localhost:3001/tasks");
    const data = await response.json();
    return data;
  };

  //fetch task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await response.json();
    return data;
  };

  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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

      {/* <Route exact path="/about" component={About} /> */}
      {showAbout && <About />}

      <Footer setShowAbout={setShowAbout} />
    </div>
  );
}

export default App;

/* ==============================https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=3005s 1:20 59 */
