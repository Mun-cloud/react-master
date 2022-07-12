import { atom, selector } from "recoil";

// 기본적으로 enum은 프로그래머를 도와주기 위해 일련의 숫자를 문자로 표현해준다.
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelecotr ",
  // {get}이 있어야 atom의 데이터를 받을 수 있다.
  // selector함수의 장점은 atom이 변경될 때 마다 연동된다는 것이다.
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
