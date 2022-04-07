import { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setToDo(event.currentTarget.value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>a
//       </form>
//     </div>
//   );
// };

const ToDoList = () => {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("Email")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
