import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  // Definimos el estado inicial
  const initialState = [];

  // Tomamos los datos iniciales y si es nulo regresamos un arreglo vvacio
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  // Le mandamos al useReducer el estado inicial y la función del todoReducer.js
  // El todos sería nuestra lista de tareas por hacer
  // El dis  patch es el que despahca las accioens hacia el reducer
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // Usamoos  el useEfect para almacentar en el local storage cuando el todos cambia
  useEffect(() => {
    // Guradamos en el local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // funcion para manejar el todo
  const handleNewTodo = (todo) => {
    // Creamos una acción para enviarle al todoReducer
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    // Le enviamos con el dispatch
    dispatch(action);
  };

  // función para borrar item
  const handeDeleteTodo = (id) => {
    // mandamos la accion de borrar
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  // manejamos el evento para cambiar el estado de done a true or false
  const handleToggleTodo = (id) => {
    // mandamos el dispatch
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handeDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,

  }
};
