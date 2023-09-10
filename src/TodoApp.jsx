// import { useEffect, useReducer } from "react";
// import { todoReducer } from "./useReducer/todoReducer";
import { TodoList } from "./components/todo-components/TodoList";
import { TodoAdd } from "./components/todo-components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  /**
   * Tratemos de concentrar la logica en un customHook:
   * 
   * Note que todo esta comentado, ya que hemos realizado el
   * procedimiento para ocultar la logica de este componente
   * en un custom hook llamado useTodo.
   * 
   * Este custom hook solo expone los todos, y las funciones
   * para manipular el estado del mismo. Referirse a el para
   * ver las implementaciones y ver lo limpio que queda el
   * codigo.
   */

  // {
  //   id: new Date().getTime() * 3,
  //   description: "Recolectar la piedra del Poder",
  //   done: false,
  // },
  // const initialState = [];


  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
    useTodo();

  /**
   * usemos la funcion para inicializar el estado.
   *
   * Esta se ejecutara una vez la primera vez que se construye
   * este componente.
   */

  // const init = () => {
  //   return JSON.parse(localStorage.getItem("todos")) || [];
  // };

  // const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  /**
   * Usemos el localStorage para tener una "persistencia de
   * la informacion".
   *
   * Cada que halla un cambio en nuestros todos se ejecutara
   * este efecto.
   */
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  /**
   * Note que en el archivo todoReducer no tenemos implementacion
   * de la accion, solamente definimos que el reducer afirma
   * poder manejar una accion llamada "[TODO] Add Todo", y
   * señala como manejara el estado.
   *
   * En esta funcion nosotros creamos la accion, que debe tener
   * como hemos mencionado una propiedad type y, en este caso
   * en el que agregamos algo, un payload que usamos para
   * enviar el objeto.
   *
   * luego usamos el dispatch que es el manejador asociado al
   * reducer que creamos con el hook useReducer, y disparamos la
   * accion
   */

  // const handleNewTodo = (todo) => {
  //   const action = {
  //     type: "[TODO] Add Todo",
  //     payload: todo,
  //   };

  //   dispatch(action);
  // };

  // const handleDeleteTodo = (id) => {
  //   const action = {
  //     type: "[TODO] Remove Todo",
  //     payload: id,
  //   };

  //   dispatch(action);
  // };

  // const handleToggleTodo = (id) => {
  //   const action = {
  //     type: "[TODO] Toggle Todo",
  //     payload: id,
  //   };

  //   dispatch(action);
  // };

  return (
    <>
      <h1>
        TodoApp (10), <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
