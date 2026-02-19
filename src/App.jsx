import { useState } from "react";
import "./App.css";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div style={styles.container}>
      <h1>SprintFlow</h1>

      <div style={styles.stats}>
        <p>Total Tasks: <strong>{totalTasks}</strong></p>
        <p>Completed: <strong>{completedTasks}</strong></p>
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.6 : 1,
                flex: 1,
              }}
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    fontSize: "18px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "6px 10px",
    cursor: "pointer",
    background: "#ff4d4d",
    border: "none",
    color: "white",
    borderRadius: "4px",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderBottom: "1px solid #eee",
    textAlign: "left",
  },
  taskText: {
    fontSize: "16px",
  },
};
