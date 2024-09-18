import './card.module.css';
import { useState } from 'react';

export function Card() {
    const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const addTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  }

  return (
    <>
      <form onSubmit={addTarea}>
        <input type="text" className="taskInput" id="newTask" placeholder="Ingresa una tarea..." value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}></input>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="taskCard">{tarea}</li>
        ))}
      </ul>
    </>
  )
}