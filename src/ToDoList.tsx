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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "please fill the field",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 이메일만 가능합니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("Firstname", {
            minLength: { value: 5, message: "5글자 이상 입력하시오" },
          })}
          placeholder="Firstname"
        />
        <input
          {...register("Lastname", { required: true })}
          placeholder="Lastname"
        />
        <input {...register("phone", { required: true })} placeholder="phone" />
        <input
          {...register("Nickname", { required: true })}
          placeholder="Nickname"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
