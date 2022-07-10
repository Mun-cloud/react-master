import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
// import { toDoSelector, toDoState } from "./atoms";
// import CreateToDo from "./components/CreateToDo";
// import ToDo from "./components/ToDo";

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   }); // register함수가 props, change등 모든 것을 해줌
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "비밀번호가 일치하지 않습니다." },
//         {
//           shouldFocus: true,
//         }
//       );
//     }
//     // setError("extraError", { message: "서버가 오프라인입니다." });
//   };
//   return (
//     <div>
//       {/** 두 개의 인자를 받음. (Valid, InValid) */}
//       <form
//         style={{ display: "flex", flexDirection: "column", width: "720px" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         {/** register함수가 반환하는 객체를 가져다가 input에 props로 줌 */}
//         {/** 요소에서 누군가 수정할 수 있기 때문에 required를 HTML에 넣는 것보다 JS에 넣는 것이 보안에 유리함. */}
//         <input
//           {...register("email", {
//             required: "필수 입력사항 입니다.",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@naver.com$/,
//               message: "네이버 이메일 주소만 가능합니다.",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "필수 입력사항 입니다.",
//             validate: (value) =>
//               value.includes("taeho") ? "태호라는 이름은 불가능합니다" : true,
//           })}
//           placeholder="First Name"
//         />

//         <span>{errors?.firstName?.message}</span>
//         <input
//           {...register("lastName", { required: "필수 입력사항 입니다." })}
//           placeholder="Last Name"
//         />

//         <span>{errors?.lastName?.message}</span>
//         <input
//           {...register("username", {
//             required: "필수 입력사항 입니다.",
//             minLength: {
//               value: 5,
//               message: "5자 이상 입력해주세요",
//             },
//           })}
//           placeholder="Username"
//         />

//         <span>{errors?.username?.message}</span>
//         <input
//           {...register("password", {
//             required: "패스워드를 입력해주세요",
//             minLength: {
//               value: 5,
//               message: "패스워드가 너무 짧습니다.",
//             },
//           })}
//           placeholder="Password"
//         />

//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("password1", {
//             required: "패스워드확인을 입력해주세요",
//             minLength: {
//               value: 5,
//               message: "패스워드가 너무 짧습니다.",
//             },
//           })}
//           placeholder="Password"
//         />

//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "내용을 입력해 주세요",
          })}
          placeholder="할 일 입력"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
