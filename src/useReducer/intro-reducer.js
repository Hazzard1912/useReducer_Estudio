const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

// Estructura de un reducer:
const todoReducer = (state = initialState, action = {}) => {
  // Podemos tener muchas acciones, esas las llamamos aqui.
  // Aunque creo que mas adelante las pondremos en otra parte.

  /**
   * Asi es como retornamos un nuevo estado.
   */
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  /**
   * Esto solo se ejecuta cuando se recibe una accion que no
   * se identifica, por lo cual retornamos el mismo estado sin
   * modificaciones.
   */
  return state;
};

let todos = todoReducer();

/**
 * No debemos hacer esto en React. Esto porque daña el historial
 * de estados de la app.
 */

// todos.push({
//   id: 2,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });

// Como modificarlo entonces?
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del Poder",
  done: false,
};

/**
 * Este nuevo todo debemos de pasarlo al reducer, para que el
 * internamente pueda modificar y retornar el nuevo estado.
 * Debemos entonces crearnos una accion que le permita al
 * reducer hacerlo.
 *
 * Las acciones lucen de la siguiente manera:
 *
 * usualmente tienen un type con el nombre bien especifico del
 * reducer que se esta usando, y la accion que realiza. Esto
 * es porque nuestras apps pueden tener muchos reducers y
 * nos facilita hacerle seguimiento al historial de cambios de
 * estado.
 *
 * Luego, puede o no tener un payload. Si es que necesita
 * informacion externa.
 */
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

/**
 * El trabajar con redux es basicamente esto, solo que tendremos
 * una forma para trabajar con tareas asincronas.
 */
