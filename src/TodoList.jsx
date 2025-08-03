import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTask = () => {
    setTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDoneAll = () => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDoneOne = (id) => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Enter a new task..."
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask} className="add">
        Add Task
      </button>
      <br />
      <br />
      <hr />
      <h3>Tasks Todo</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? {
                      textDecorationLine: "line-through",
                    }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)} className="delete">
              Delete
            </button>
            &nbsp; &nbsp;
            <button onClick={() => upperCaseOne(todo.id)} className="upper">
              UpperCase One
            </button>
            &nbsp; &nbsp;
            <button onClick={() => markAsDoneOne(todo.id)} className="done-btn">
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll} className="utility upper">
        UpperCase All
      </button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={markAsDoneAll} className="utility done-btn">
        Mark as Done All
      </button>
    </div>
  );
}
