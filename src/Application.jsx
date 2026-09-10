import { useState } from "react";

export default function Application() {
  const [tasks, setTasks] = useState([
    { description: "Task1" },
    { description: "Task2" },
    { description: "Task3" },
  ]);

  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTasks((old) => [...old, { description }]);
  }

  return (
    <>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li>
            <input type={"checkbox"} />
            {t.description}
          </li>
        ))}
      </ul>
      <h2>New Task</h2>
      <ul>
        <form onSubmit={handleSubmit}>
          <div>
            Task Name:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button>Save {description}</button>
          </div>
        </form>
      </ul>
    </>
  );
}
