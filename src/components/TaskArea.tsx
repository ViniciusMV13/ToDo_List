import styles from "./TaskArea.module.css";
import { PlusCircle } from "phosphor-react";

import { useState, ChangeEvent, InvalidEvent, FormEvent } from "react";

export function TaskArea() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([""]);

  function handleCreatNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
    console.log(tasks);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório!!!");
  }

  const isNewTaskEmpty = newTaskText.length === 0;
  return (
    <div >
    <form onSubmit={handleCreatNewTask} className={styles.newTask}>
      <textarea
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
    <div className={styles.taskFrame}>
    <div className={styles.taskHeader}>
      <h1>teste</h1>
      <h1>batata</h1>
    </div>
    </div>

    </div>
    
  );
}
