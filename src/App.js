import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
