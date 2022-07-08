import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
// import { toDoSelector, toDoState } from "./atoms";
// import CreateToDo from "./components/CreateToDo";
// import ToDo from "./components/ToDo";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm(); // register함수가 props, change등 모든 것을 해줌
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      {/** 두 개의 인자를 받음. (Valid, InValid) */}
      <form
        style={{ display: "flex", flexDirection: "column", width: "720px" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/** register함수가 반환하는 객체를 가져다가 input에 props로 줌 */}
        {/** 요소에서 누군가 수정할 수 있기 때문에 required를 HTML에 넣는 것보다 JS에 넣는 것이 보안에 유리함. */}
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: "패스워드를 입력해주세요",
            minLength: {
              value: 5,
              message: "패스워드가 너무 짧습니다.",
            },
          })}
          placeholder="Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

/* const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("10자 이상 입력해주세요");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="write a todo" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}; */

export default ToDoList;
