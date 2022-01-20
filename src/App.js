import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import Addtask from "./component/Addtask";

function App() {
  // to hide or unhide the form with add button
  const [showAddTask, setShowAddTask] = useState(false);

  //to set the tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "6th May at 1:45 PM",
    },
    {
      id: 2,
      text: "Doctors Appointment 2",
      day: "6th June at 1:45 PM",
    },
    {
      id: 3,
      text: "Doctors Appointment 3",
      day: "6th July at 1:45 PM",
    },
    {
      id: 4,
      text: "Doctors Appointment 4",
      day: "6th August at 1:45 PM",
    },
  ]);

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
