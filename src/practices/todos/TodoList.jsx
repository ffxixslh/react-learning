import React from "react";
import { useState } from "react";
import { useTodo, useTodoDispatch } from "./todoContext";

const TodoList = () => {
  const todos = useTodo();
  console.log("TodoList render");
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodoDispatch();
  const deleteStyle = { textDecorationLine: "line-through" };
  console.log("Todo render");

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) =>
          dispatch({
            type: "changed",
            todo: {
              ...todo,
              done: e.target.checked,
            },
          })
        }
      />
      {isEditing ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                text: e.target.value,
              },
            });
          }}
        />
      ) : (
        <span style={todo.done ? deleteStyle : null}>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => dispatch({ type: "deleted", id: todo.id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoList;
