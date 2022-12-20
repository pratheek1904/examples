import React, {useState } from "react";

const Form = () => {
  const [myval, setmyval] = useState("");
  const[todos,seTodo]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newarr={id:new Date().getTime().toString(),myval}
    seTodo([...todos,newarr])
    setmyval("")
  }
  const handleRemove=(id)=>{
  const removed=todos.filter((elem)=>{
    return elem.id!==id
  })
  seTodo(removed)
  }
  const handleEdit=(id)=>{
     const edit=todos.filter((elem)=>{
      return elem.id===id
     })
   setmyval(edit[0].myval)
   const rem=todos.filter((elem)=>{
    return elem.id!==id
   })
   seTodo(rem)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter here"
          value={myval}
          onChange={(e) => setmyval(e.target.value)}
        />
        <button>Add</button>
      </form>
      {
        todos.map((elem)=>{
          return(
            <div key={elem.id}>
              <p>{elem.myval}</p><button onClick={()=>handleRemove(elem.id)}>Remove</button> &nbsp;
               <button onClick={()=>handleEdit(elem.id)}>Edit</button>
            </div>
          )
        })
      }
    </div>
  );
};

export default Form;

// import React, { useState } from "react";

// const Form = () => {
//   const [myvalue, setmyvalue] = useState("");
//   const [todo, setTodo] = useState([]);

//   const submitTodo = (e) => {
//     e.preventDefault();
//     if (myvalue) {
//       const newarr = { id: new Date().getTime().toString(), myvalue };
//       setTodo([...todo, newarr]);
//       setmyvalue("");
//     } else {
//       alert("Enter a Todo");
//     }
//   };
//   const todoRemove = (id) => {
//     const removed = todo.filter((val) => {
//       return val.id !== id;
//     });
//     setTodo(removed);
//   };
//   return (
//     <div>
//       <form onSubmit={submitTodo}>
//         <input
//           type="text"
//           placeholder="Enter Todo"
//           value={myvalue}
//           onChange={(e) => setmyvalue(e.target.value)}
//         />
//         <button>Add</button>
//       </form>
//       {todo.map((elem) => {
//         return (
//           <div key={elem.id}>
//             <p>
//               {elem.myvalue}
//               <button onClick={() => todoRemove(elem.id)}>Remove</button>
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Form;
