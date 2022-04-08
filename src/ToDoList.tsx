import { useForm } from "react-hook-form";
import { atom } from "recoil";

const toDoState = atom({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("할 일 추가", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "할 일을 적어주세요",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
