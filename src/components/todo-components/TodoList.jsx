import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  /**
   * Ahora, para implementar la caracteristica de borrar un
   * elemento, note que estamos recibiendo onDeleteTodo de
   * TodoApp, pero este a su vez debe ser implementado por
   * TodoItem, de modo que se ve algo feo ver como estamos
   * pasando una referencia a una funcion desde el componente
   * padre al componente nieto.
   *
   * Esto se soluciona tanto usando Redux, como tambien usando
   * el hook context
   */

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
