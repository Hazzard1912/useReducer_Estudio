import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

export const useTodo = () => {
  // Estado inicial
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // Efecto cuando haya cambio en los todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Funciones a exponer:
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    ...todos,
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
