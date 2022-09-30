import React, { useReducer, useContext, createContext } from "react";

const TodoContext = createContext(null);

const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTasks);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};

const todoReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return state.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }

    case "deleted": {
      return state.filter((t) => t.id !== action.id);
    }

    default:
      throw new Error("Unknown action:" + action.type);
  }
};

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
