// Primer reducer funcional.

export const todoReducer = (initialState, action) => {
  // Usualmente se trabaja con un switch para filtrar las action
  switch (action.type) {
    // case "ABC":
    //   Esto es comun cuando no hemos implementado la logica.
    //   throw new Error("Action.type = ABC no esta implementada");

    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      // Para esto podemos usar el filter, este siempre retorna
      // un nuevo arreglo, es decir, no muta el initalState.
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
