import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // 카테고리 변경하여 새 todo만들기
      const newToDo = { text, id, category: name as any };
      // 수정된 대상이 배열 내의 원래 자리에 유지되기 위한 설정
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          하는 중
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          할 일
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          완료
        </button>
      )}
    </li>
  );
};

export default ToDo;
