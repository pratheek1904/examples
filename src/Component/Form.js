import React, { useState } from "react";

const Form = () => {
  const [myvalue, setmyvalue] = useState("");
  const [todo, setTodo] = useState([]);

  const submitTodo = (e) => {
    e.preventDefault();
    if (myvalue) {
      const newarr = { id: new Date().getTime().toString(), myvalue };
      setTodo([...todo, newarr]);
      setmyvalue("");
    } else {
      alert("Enter a Todo");
    }
  };
  const todoRemove = (id) => {
    const removed = todo.filter((val) => {
      return val.id !== id;
    });
    setTodo(removed);
  };
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={myvalue}
          onChange={(e) => setmyvalue(e.target.value)}
        />
        <button>Add</button>
      </form>
      {todo.map((elem) => {
        return (
          <div key={elem.id}>
            <p>
              {elem.myvalue}
              <button onClick={() => todoRemove(elem.id)}>Remove</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
