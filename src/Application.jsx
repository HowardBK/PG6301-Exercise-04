import { useState } from "react";

export default function Application() {
  const [tasks, setTasks] = useState([
    { description: "Task1", completed: false },
    { description: "Task2", completed: true },
    { description: "Task3", completed: false },
  ]);

  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTasks((old) => [...old, { description, completed: false }]);
  }

  function handleCompletedChanged(task, completed) {
    setTasks((old) => old.map((o) => (o === task ? { ...o, completed } : o)));
  }

  return (
    <>
      <h1>My tasks</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
      <ul>
        {tasks.map((t) => (
          <li>
            <input
              type={"checkbox"}
              checked={t.completed}
              onChange={(e) => handleCompletedChanged(t, e.target.checked)}
            />
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
